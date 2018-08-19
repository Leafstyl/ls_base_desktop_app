import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { SocialComponent } from './components/social';
// Guards
import { RequireAuthGuard } from '../auth';

export const SocialRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'social',
    component: SocialComponent,
    canActivate: [RequireAuthGuard]
  }
]);
