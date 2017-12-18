import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { NavComponent } from './core/nav/nav.component';
import { CoreModule } from './core/core.module';

// Modules
import { AuthModule } from './auth';
import { FirebaseModule } from './firebase';
import { BiometricsModule } from './biometrics';
// Material UI
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule

} from '@angular/material';

/* Feature Modules */


@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    NavComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { useHash: false }),
    AuthModule,
    FirebaseModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    BiometricsModule,
    CoreModule
  ],
  providers: []
})

export class LsModule {
}
