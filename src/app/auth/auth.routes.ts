import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
// Components
import {SignInComponent} from './components/sign-in';
// Guards
import {RequireUnauthGuard} from './guards';

export const AuthRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: SignInComponent,
    canActivate: [RequireUnauthGuard]
  }
]);
