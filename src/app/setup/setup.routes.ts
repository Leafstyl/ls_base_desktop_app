import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { SetupComponent } from './components/setup';
// Guards
import { RequireAuthGuard } from '../auth';

export const SetupRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'setup',
    component: SetupComponent,
    canActivate: [RequireAuthGuard]
  }
]);
