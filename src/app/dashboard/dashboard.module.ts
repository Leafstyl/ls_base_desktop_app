import { NgModule } from '@angular/core';

// Components
import { DashboardComponent } from './components/dashboard';
// Modules
import { DashboardRoutesModule } from './dashboard.routes';
// Services
import { DashboardService } from './dashboard.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutesModule,
    SharedModule
  ],
  providers: [
    DashboardService
  ]
})

export class DashboardModule {
}
