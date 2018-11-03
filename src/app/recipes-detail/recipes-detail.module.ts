import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Services

// Components
// import {RecipesComponent} from './components/recipes';
// Modules
import {SharedModule} from '../shared/shared.module';
/*
import {RecipesDetailComponent} from './components/recipes-detail/recipes-detail.component';
*/
import {RecipesDetailService} from './recipes-detail.service';
import {RecipesDetailRoutesModule} from './recipes-detail.routes';
// import {RecipesService} from '../recipes/components/recipes/recipes.service';

@NgModule({
  declarations: [
    // RecipesDetailComponent,
    // DialogRecipesComponent
  ],
  imports: [
    SharedModule,
    RecipesDetailRoutesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    RecipesDetailService,
    // RecipesService
  ],
  entryComponents: [
    // DialogRecipesComponent
  ]
})

export class RecipesDetailModule {
}
