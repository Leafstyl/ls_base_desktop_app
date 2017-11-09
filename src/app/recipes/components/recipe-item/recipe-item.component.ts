import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IRecipe} from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recipe-item',
  styleUrls: ['./recipe-item.component.scss'],
  templateUrl: './recipe-item.component.html',
})

export class RecipeItemComponent {
  @Input() recipe: IRecipe;
  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  editing = false;
  title = '';

  editTitle(): void {
    this.editing = true;
    this.title = this.recipe.title;
  }

  saveTitle(): void {
    if (this.editing) {
      const title: string = this.title.trim();
      if (title.length && title !== this.recipe.title) {
        this.update.emit({title});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }
}
