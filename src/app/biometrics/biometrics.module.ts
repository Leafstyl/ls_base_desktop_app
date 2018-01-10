import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Components
import { BiometricsComponent } from './components/biometrics';
// Modules
import { BiometricsRoutesModule } from './biometrics.routes';
// Services
import { BiometricsService } from './biometrics.service';
import { SharedModule } from '../shared/shared.module';
// Stepper
// import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [
    BiometricsComponent
  ],
  imports: [
    CdkTableModule,
    FormsModule,
    HttpModule,
    // MatNativeDateModule,
    ReactiveFormsModule,
    BiometricsRoutesModule,
    SharedModule
  ],
  providers: [
    BiometricsService
  ]
})

export class BiometricsModule {
}
