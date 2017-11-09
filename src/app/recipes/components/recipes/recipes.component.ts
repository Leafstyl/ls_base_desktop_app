import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipes',
  template: `
    <div class="g-row">
      <div class="g-col">
        <app-recipe-form (createRecipe)="recipesService.createRecipe($event)"></app-recipe-form>
      </div>

      <div class="g-col">
        <app-recipe-list
          [recipes]="recipesService.visibleRecipes$"
          (remove)="recipesService.removeRecipe($event)"
          (update)="recipesService.updateRecipe($event.recipe, $event.changes)"></app-recipe-list>
      </div>
    </div>
  `
})
export class RecipesComponent implements OnInit {
  constructor(public route: ActivatedRoute,
              public recipesService: RecipesService) {
  }

  ngOnInit() {
  }
}
