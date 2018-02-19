import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { LibComponent } from './components/library';
// Guards
import { RequireAuthGuard } from '../auth';

export const LibRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'library',
    component: LibComponent,
    canActivate: [RequireAuthGuard]
  }
]);
