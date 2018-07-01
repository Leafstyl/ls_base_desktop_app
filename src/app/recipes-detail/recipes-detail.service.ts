import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Recipe} from '../recipe';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class RecipesDetailService {

  constructor(

   ) { }



}
