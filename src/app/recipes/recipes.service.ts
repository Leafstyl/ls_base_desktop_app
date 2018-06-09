import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable()
export class RecipesService {

  private recipesUrl = 'api/recipes'; // url to web api

  constructor(

  ) { }


  /** GET recipes from the server */
  // getRecipes (): Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(this.recipesUrl);
  //
  // }


  /** GET hero by id. 404 if not found */


  /** POST: add a new recipe to the server */


  /** PUT: update the recipe on the server */



}
