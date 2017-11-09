import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recipe-form',
  styleUrls: ['./recipe-form.component.scss'],
  template: `
    <form class="recipe-form" (ngSubmit)="submit()" novalidate>
      <input
        [(ngModel)]="title"
        (keyup.escape)="clear()"
        autocomplete="off"
        autofocus
        class="recipe-form__input"
        name="title"
        placeholder="Add a new recipe!"
        required
        type="text">
    </form>
  `
})

export class RecipeFormComponent {
  @Output() createRecipe = new EventEmitter(false);

  title = '';

  clear(): void {
    this.title = '';
  }

  submit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.createRecipe.emit(title);
    }
    this.clear();
  }
}
