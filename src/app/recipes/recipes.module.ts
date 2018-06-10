import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Services
import {RecipesService} from './recipes.service';
import {DialogRecipesComponent} from './components/dialog/dialog-recipes.component';
// Components
import {RecipesComponent} from './components/recipes';
// Modules
import {SharedModule} from '../shared/shared.module';
import {RecipesRoutesModule} from './recipes.routes';

@NgModule({
  declarations: [
    RecipesComponent,
    DialogRecipesComponent
  ],
  imports: [
    SharedModule,
    RecipesRoutesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    RecipesService
  ],
  entryComponents: [
    DialogRecipesComponent
  ]
})

export class RecipesModule {
}
