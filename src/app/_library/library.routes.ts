import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { LibraryComponent } from './components/library';
// Guards
import { RequireAuthGuard } from '../auth';

export const LibraryRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'library',
    component: LibraryComponent,
    canActivate: [RequireAuthGuard]
  }
]);
