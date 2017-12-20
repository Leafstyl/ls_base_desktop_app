import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../dashboard.service';
// import { IDashboard, Dashboard } from '../../models/dashboard';

@Component({
  selector: 'ls-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  // dashboard: IDashboard;
  editing: boolean = false;

  // private lastDashboard: IDashboard;

  constructor(public route: ActivatedRoute, public dashboardService: DashboardService) {
  }

  ngOnInit() {
    console.log('Initializing DashboardComponent...');
  }
  //
  //   this.dashboardService.dashboard.subscribe(dashboard => {
  //     this.dashboard = <IDashboard>dashboard;
  //     if (!this.dashboard) {
  //       this.saveDashboard(new Dashboard());
  //     } else {
  //       this.lastDashboard = Object.assign({}, this.dashboard);
  //     }
  //     console.log(`this.dashboard: ${this.dashboard}`)
  //   });
  // }
  //
  // saveDashboard(dashboard?: IDashboard): void {
  //   if (dashboard) {
  //     this.dashboardService.saveDashboard(dashboard);
  //   } else {
  //     this.dashboardService.saveDashboard(this.dashboard);
  //   }
  //   this.stopEditing();
  // }
  //
  // editDashboard(): void {
  //   this.editing = true;
  // }
  //
  // cancelEdit(): void {
  //   Object.assign(this.dashboard, this.lastDashboard);
  //   this.stopEditing();
  // }
  //
  // stopEditing(): void {
  //   this.editing = false;
  // }
}
