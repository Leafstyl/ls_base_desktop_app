import { NgModule } from '@angular/core';

// Components
import { DashboardComponent, DialogOverviewExampleDialog } from './components/dashboard';
// Modules
import { DashboardRoutesModule } from './dashboard.routes';
import { BiometricsModule } from '../biometrics';
// Services
import { DashboardService } from './dashboard.service';
import { SharedModule } from '../shared/shared.module';

// Dialog


@NgModule({
  entryComponents: [ DialogOverviewExampleDialog ],
  declarations: [
    DashboardComponent,
    DialogOverviewExampleDialog
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
