import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
// components
import {RecipeFormComponent} from './components/recipe-form';
import {RecipeItemComponent} from './components/recipe-item';
import {RecipeListComponent} from './components/recipe-list';
import {RecipesComponent} from './components/recipes';
// directives
import {AutoFocusDirective} from './directives';
// modules
import {RecipesRoutesModule} from './recipes.routes';
// services
import {RecipesService} from './recipes.service';

@NgModule({
  declarations: [
    AutoFocusDirective,
    RecipeFormComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipesRoutesModule
  ],
  providers: [
    RecipesService
  ]
})

export class RecipesModule {
}
