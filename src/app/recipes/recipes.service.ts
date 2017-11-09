import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth';
import {IRecipe, Recipe} from './models';

@Injectable()
export class RecipesService {
  visibleRecipes$: Observable<any>;

  private recipesRef: AngularFireList<any>;

  constructor(afDb: AngularFireDatabase, auth: AuthService) {
    auth.uid$
      .take(1)
      .subscribe(uid => {
        const path = `/recipes/${uid}`;

        this.recipesRef = afDb.list(path);

        this.visibleRecipes$ = this.recipesRef.snapshotChanges().map(c1 =>
          c1.map(c2 =>
            ({$key: c2.payload.key, ...c2.payload.val()})
          )
        );
      });
  }

  createRecipe(title: string): PromiseLike<any> {
    return this.recipesRef.push(new Recipe(title));
  }

  removeRecipe(recipe: IRecipe): Promise<any> {
    return this.recipesRef.remove(recipe.$key);
  }

  updateRecipe(recipe: IRecipe, changes: any): Promise<any> {
    console.log(recipe);
    return this.recipesRef.update(recipe.$key, changes);
  }
}
