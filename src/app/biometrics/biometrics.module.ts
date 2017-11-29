import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { BiometricsComponent } from './components/biometrics';
// Modules
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BiometricsRoutesModule } from './biometrics.routes';
// Services
import { BiometricsService } from './biometrics.service';

@NgModule({
  declarations: [
    BiometricsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BiometricsRoutesModule
  ],
  providers: [
    BiometricsService
  ]
})

export class BiometricsModule {
}
