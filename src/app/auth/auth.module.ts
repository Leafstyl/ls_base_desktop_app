import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Components
import {SignInComponent} from './components/sign-in';
// Modules
import {AuthRoutesModule} from './auth.routes';
// Services
import {RequireAuthGuard, RequireUnauthGuard} from './guards';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutesModule
  ],
  providers: [
    AuthService,
    RequireAuthGuard,
    RequireUnauthGuard
  ]
})
export class AuthModule {
}
