import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth';
import {IRecipes, Recipes} from './models/recipes';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import { Observer } from 'firebase/app';

@Injectable()
export class RecipesService implements OnInit {
  recipes: Observable<IRecipes>;

  private _recipesRef: AngularFireObject<IRecipes>;

  constructor(
    private _angularFireDatabase: AngularFireDatabase,
    private _authService: AuthService
  ) {
    this._authService.uid$
      .take(1)
      .subscribe(uid => {
        const recipesPath = `/recipes/${uid}`
        this._recipesRef = this._angularFireDatabase.object(recipesPath);
        this.recipes = this._recipesRef.valueChanges();
      });
  }

  ngOnInit() {
    console.log('Initializing RecipesService...');
  }

  // saveBiometrics(biometric: IBiometrics): void {
  //   this._biometricsRef.set(biometric);
  // }
}
