import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { SignInComponent } from './components/sign-in';
// Services
import { RequireAuthGuard, RequireUnauthGuard } from './guards';
import { AuthService } from './auth.service';
// Material UI
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// Modules
import { AuthRoutesModule } from './auth.routes';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
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
