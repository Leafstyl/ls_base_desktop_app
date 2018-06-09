import { NgModule } from '@angular/core';

// Services
import {RecipesService} from './recipes.service';
// Components
import { RecipesComponent } from './components/recipes';
// Modules
import { SharedModule } from '../shared/shared.module';
import {DialogRecipesComponent} from './components/dialog/dialog-recipes.component';
import {RecipesRoutesModule} from './recipes.routes';

@NgModule({
  declarations: [
    RecipesComponent,
    DialogRecipesComponent
  ],
  imports: [
    SharedModule,
    RecipesRoutesModule
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
