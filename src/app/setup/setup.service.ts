import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth';
import { ISetup, Setup } from './models';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import { Observer } from 'firebase/app';

// Stepper
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Injectable()
export class SetupService implements OnInit {
  setup: Observable<ISetup>;
  // stepper
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  private _setupRef: AngularFireObject<ISetup>;

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
    private _authService: AuthService,
    private _formBuilder: FormBuilder
  ) {
    this._authService.uid$
    .take(1)
    .subscribe(uid => {
      const setupPath = `/setup/${uid}`
      this._setupRef = this._angularFireDatabase.object(setupPath);
      this.setup = this._setupRef.valueChanges();
    });
  }

  ngOnInit() {
    console.log('Initializing SetupService...');
    // Stepper
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  saveSetup(biometric: ISetup): void {
    this._setupRef.set(biometric);
  }
}
