import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { SignInComponent } from './components/sign-in';
// Services
import { RequireAuthGuard, RequireUnauthGuard } from './guards';
import { AuthService } from './auth.service';
// Material UI
import { SharedModule } from '../shared/shared.module';
// Modules
import { AuthRoutesModule } from './auth.routes';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
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
