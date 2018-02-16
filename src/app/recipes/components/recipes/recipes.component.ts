import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../recipes.service';
// import { IDashboard, Dashboard } from '../../models/dashboard';

@Component({
  selector: 'ls-recipes',
  styleUrls: ['./recipes.component.scss'],
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  // dashboard: IDashboard;
  editing: boolean = false;

  // private lastDashboard: IDashboard;

  constructor(public route: ActivatedRoute, public recipesService: RecipesService) {
  }

  ngOnInit() {
    console.log('Initializing Recipes Component...');
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
