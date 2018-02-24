import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { DialogOverviewExample } from './core/modal/dialog-overview-example';
import { DialogOverviewExampleDialog } from './core/modal/dialog-overview-example';
import { CoreModule } from './core/core.module';
// Modules
import { AuthModule } from './auth';
import { FirebaseModule } from './firebase';
import { BiometricsModule } from './biometrics';
import { SetupModule } from './setup';
import { DashboardModule } from './dashboard';
import { RecipesModule } from './recipes';
import { LibModule } from './library';
// import {DialogOverviewExampleDialog} from './core/modal/d'; // TODO: Move me

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
  entryComponents: [DialogOverviewExample, DialogOverviewExampleDialog],
  declarations: [
    AppComponent,
    NavComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog
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
    // Modal
    // DialogOverviewExampleDialog,
    // Modules
    BiometricsModule,
    SetupModule,
    DashboardModule,
    RecipesModule,
    LibModule,
    CoreModule,

  ],

  bootstrap: [
    AppComponent
  ],
  providers: []
})

export class LsModule {}


