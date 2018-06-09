import { NgModule } from '@angular/core';

// Services
import {RecipesService} from './recipes.service';
// Components
import { RecipesComponent } from './components/recipes';
// Modules
import { RecipesRoutesModule } from './recipes.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    RecipesRoutesModule,
    SharedModule
  ],
  providers: [
    RecipesService
  ]
})

export class RecipesModule {
}
