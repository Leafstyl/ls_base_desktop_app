import { NgModule } from '@angular/core';

// Components
import { BiometricsComponent } from './components/biometrics';
// Modules
import { BiometricsRoutesModule } from './biometrics.routes';
// Services
import { BiometricsService } from './biometrics.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BiometricsComponent
  ],
  imports: [
    BiometricsRoutesModule,
    SharedModule
  ],
  providers: [
    BiometricsService
  ]
})

export class BiometricsModule {
}
