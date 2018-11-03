import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { RecipesComponent } from './components/recipes';
// Guards
import { RequireAuthGuard } from '../auth';
// import {RecipesDetailComponent} from '../recipes-detail/components/recipes-detail/recipes-detail.component';

export const RecipesRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [RequireAuthGuard]
  }
/*  {
    path: 'recipes/:id',
    component: RecipesDetailComponent,
    canActivate: [RequireAuthGuard]
  }*/
]);
