import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { LibPatternComponent } from './components/lib-pattern';
// Guards
import { RequireAuthGuard } from '../auth';

export const LibPatternRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'pattern-library',
    component: LibPatternComponent,
    canActivate: [RequireAuthGuard]
  }
]);
