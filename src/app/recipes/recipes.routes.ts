import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
// Components
import {RecipesComponent} from './components/recipes';
// Guards
import {RequireAuthGuard} from '../auth';

export const RecipesRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [RequireAuthGuard]
  }
]);
