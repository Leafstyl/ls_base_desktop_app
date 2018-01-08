import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { CoreModule } from './core/core.module';
// Stepper
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Modules
import { AuthModule } from './auth';
import { FirebaseModule } from './firebase';
import { BiometricsModule } from './biometrics';
import { DashboardModule } from './dashboard';
import { MarketModule } from './market';
// Stepper
import {HttpModule} from '@angular/http';
// import {CdkTableModule} from '@angular/cdk/table';
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
  // Stepper
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
  MatStepperModule

} from '@angular/material';

/* Feature Modules */
@NgModule({
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
    BiometricsModule,
    DashboardModule,
    MarketModule,
    CoreModule,
    // Stepper
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    // DemoMaterialModule,
    // MatNativeDateModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})

export class LsModule {}


