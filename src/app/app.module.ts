import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { CoreModule } from './core/core.module';

// Modules
import { AuthModule } from './auth';
import { FirebaseModule } from './firebase';
import { BiometricsModule } from './biometrics';
import { DashboardModule } from './dashboard';
import { MarketModule } from './market';

// Material UI
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule

} from '@angular/material';

/* Feature Modules */


@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    NavComponent
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
    MatTabsModule,
    BiometricsModule,
    DashboardModule,
    MarketModule,
    CoreModule
  ],
  providers: []
})

export class LsModule {
}
