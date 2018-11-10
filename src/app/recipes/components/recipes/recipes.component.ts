import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipesService} from '../../recipes.service';
import {IRecipes} from '../../models/recipes';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogRecipesComponent} from '../dialog/dialog-recipes.component';

@Component({
  moduleId: module.id,
  selector: 'ls-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: IRecipes; // init to empty map instead of null
  recipesArray: any[] = [];

  hasRecipes: boolean = false;

  objectKeys = Object.keys;

  editing: boolean = false;


  private lastRecipes: IRecipes;

  constructor(
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public recipesService: RecipesService,
    private ref: ChangeDetectorRef) {
  }

  ngOnInit () {
    this.loadData();
  }

  loadData () {
    this.recipesService.recipes.subscribe(recipes => {
      this.recipes = <IRecipes>recipes;
      this.hasRecipes = true;
    });
  };

  addClass(id: any): void {
    // this.id = id;
  };

  openDialog (): void {
    const dialogRef = this.dialog.open(DialogRecipesComponent, {
      width: '650px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.getRecipes();
    });
  }

  // getRecipe (): void {
  //   debugger;
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.recipesService.getRecipe(id)
  //     .subscribe(recipe => this.recipe = recipe);
  // }


  //
  // addRecipe(e, any): void {
  //   console.log('===============> addRecipe', e);
  // }

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
