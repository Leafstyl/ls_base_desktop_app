import { NgModule } from '@angular/core';

// Components
import { DashboardComponent } from './components/dashboard';
// Modules
import { DashboardRoutesModule } from './dashboard.routes';
import { BiometricsModule } from '../biometrics';
// Services
import { DashboardService } from './dashboard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  entryComponents: [ DashboardComponent ],
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutesModule,
    SharedModule,
    BiometricsModule

  ],
  providers: [
    DashboardService
  ]
})

export class DashboardModule {
}
