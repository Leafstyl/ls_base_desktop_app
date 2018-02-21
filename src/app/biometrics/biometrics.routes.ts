import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { BiometricsComponent } from './components/biometrics';
// Guards
import { RequireAuthGuard } from '../auth';

export const BiometricsRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'biometrics',
    component: BiometricsComponent,
    canActivate: [RequireAuthGuard]
  }
]);
