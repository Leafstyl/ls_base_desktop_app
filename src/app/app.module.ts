import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
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

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
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
    BiometricsModule
  ],
  providers: []
})

export class LsModule {
}
