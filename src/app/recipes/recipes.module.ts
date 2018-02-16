import { NgModule } from '@angular/core';

// Components
import { RecipesComponent } from './components/recipes';
// Modules
import { RecipesRoutesModule } from './recipes.routes';
// Services
import { RecipesService } from './recipes.service';
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
