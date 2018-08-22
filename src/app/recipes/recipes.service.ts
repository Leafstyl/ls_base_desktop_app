import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import {Recipe} from '../recipe';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecipesService {

  private recipesUrl = 'api/recipes'; // url to web api

  constructor(
    private http: HttpClient
  ) { }


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
