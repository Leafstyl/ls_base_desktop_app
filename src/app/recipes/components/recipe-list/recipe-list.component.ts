import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import {IRecipe} from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recipe-list',
  styleUrls: ['./recipe-list.component.scss'],
  template: `
    <div class="recipe-list">
      <app-recipe-item
        *ngFor="let recipe of recipes | async"
        [recipe]="recipe"
        (remove)="remove.emit(recipe)"
        (update)="update.emit({recipe: recipe, changes: $event})"></app-recipe-item>
    </div>
  `
})

export class RecipeListComponent {
  @Input() recipes: AngularFireList<IRecipe[]>;

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);
}
