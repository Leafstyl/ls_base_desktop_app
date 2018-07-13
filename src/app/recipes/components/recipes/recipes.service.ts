import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

// import { AuthService } from '../auth';
// import { IBiometrics, Biometrics } from './models';

import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import { Observer } from 'firebase/app';
import {Recipe} from '../../../recipe';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class RecipesService implements OnInit {

  private recipesUrl = 'recipes'; // url to the web api

  constructor(
    //private http: HttpClient
  ) { }

  /** GET recipes from the server */
  // getRecipes (): Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(this.recipesUrl);
  // }

  /** GET hero by id. 404 if not found */
  getRecipe (id: number): Observable<Recipe> {
    debugger;
    const url = `${this.recipesUrl}/${id}`;
    // return this.http.get<Recipe>(url)
    //   .pipe(
    //     // error goes here
    //   );
  }

  ngOnInit() {
    console.log('Initializing ...');
  }

}
