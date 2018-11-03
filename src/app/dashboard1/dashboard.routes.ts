import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { DashboardComponent } from './components/dashboard';
// Guards
import { RequireAuthGuard } from '../auth';

export const DashboardRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RequireAuthGuard]
  }
]);
