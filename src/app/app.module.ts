import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { DesignSystemModule } from './_design-system/design-system.module';
// Material UI
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule

} from '@angular/material';

/* Feature Modules */
@NgModule({
  declarations: [
    AppComponent,
    NavComponent
    // DesignSystemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { useHash: false }),
    AuthModule,
    FirebaseModule,
    // Material
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    // Modules
    DesignSystemModule,
    BiometricsModule,
    DashboardModule,
    MarketModule,
    CoreModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    // {provide: MatStepperIntl, useClass: MyIntl}
  ]
})

export class LsModule {}
