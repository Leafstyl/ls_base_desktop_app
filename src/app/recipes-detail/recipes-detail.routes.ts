import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
// import { RecipesDetailComponent } from './components/recipes-detail';
// Guards
import { RequireAuthGuard } from '../auth';

export const RecipesDetailRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    // path: 'detail:id',
    // component: RecipesDetailComponent,
    // canActivate: [RequireAuthGuard]
  }
]);
