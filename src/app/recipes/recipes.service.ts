import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import {Recipe} from '../recipe';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import {AuthService} from '../auth/auth.service';
import {IRecipes} from './models/recipes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecipesService implements OnInit {

  private recipesUrl = 'api/recipes'; // url to web api

  recipes: Observable<IRecipes>;

  private _recipesRef: AngularFireObject<IRecipes>;

  constructor(
    private http: HttpClient,
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

  /** GET recipes from the server */
  // getRecipes (): Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(this.recipesUrl);
  //
  // }


  /** GET hero by id. 404 if not found */
  getRecipe (id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url)
      .pipe(
        // error goes here
      )
  }

  /** POST: add a new recipe to the server */


  /** PUT: update the recipe on the server */



}
