import { NgModule } from '@angular/core';

// Components
import { LibPatternComponent } from './components/lib-pattern';
// Modules
import { LibPatternRoutesModule } from './lib-pattern.routes';
import { BiometricsModule } from '../biometrics';
// Services
import { LibPatternService } from './lib-pattern.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  entryComponents: [ LibPatternComponent ],
  declarations: [
    LibPatternComponent
  ],
  imports: [
    LibPatternRoutesModule,
    SharedModule,
    BiometricsModule

  ],
  providers: [
    LibPatternService
  ]
})

export class LibPatternModule {
}
