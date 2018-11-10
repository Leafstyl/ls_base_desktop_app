import { NgModule } from '@angular/core';

// Components
import { LibraryComponent } from './components/library';
// Modules
import { LibraryRoutesModule } from './library.routes';
import { BiometricsModule } from '../biometrics';
// Services
import { LibraryService } from './library.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  entryComponents: [ LibraryComponent ],
  declarations: [
    LibraryComponent
  ],
  imports: [
    LibraryRoutesModule,
    SharedModule,
    BiometricsModule

  ],
  providers: [
    LibraryService
  ]
})

export class LibraryModule {
}
