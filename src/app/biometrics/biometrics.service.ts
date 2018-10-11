import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth';
import { IBiometrics, Biometrics } from './models';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import { Observer } from 'firebase/app';

@Injectable()
export class BiometricsService implements OnInit {
  biometrics: Observable<IBiometrics>;

  private _biometricsRef: AngularFireObject<IBiometrics>;

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
    private _authService: AuthService
  ) {
    this._authService.uid$
    .take(1)
    .subscribe(uid => {
      const biometricsPath = `/biometrics/${uid}`
      this._biometricsRef = this._angularFireDatabase.object(biometricsPath);
      this.biometrics = this._biometricsRef.valueChanges();
    });
  }

  ngOnInit() {
    console.log('Initializing BiometricsService...');
  }

  saveBiometrics(biometric: IBiometrics): void {
    this._biometricsRef.set(biometric);
  }
}
