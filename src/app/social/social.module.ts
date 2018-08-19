import { NgModule } from '@angular/core';

// Components
import { SocialComponent } from './components/social';
// Modules
import { SocialRoutesModule } from './social.routes';
import { BiometricsModule } from '../biometrics';
// Services
import { SocialService } from './social.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  entryComponents: [ SocialComponent ],
  declarations: [
    SocialComponent
  ],
  imports: [
    SocialRoutesModule,
    SharedModule,
    BiometricsModule

  ],
  providers: [
    SocialService
  ]
})

export class SocialModule {
}
