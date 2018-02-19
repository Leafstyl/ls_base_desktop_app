import { NgModule } from '@angular/core';

// Components
import { LibComponent } from './components/library';
// Modules
import { LibRoutesModule } from './lib.routes';
// Services
import { LibService } from './lib.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LibComponent
  ],
  imports: [
    LibRoutesModule,
    SharedModule
  ],
  providers: [
    LibService
  ]
})

export class LibModule {
}
