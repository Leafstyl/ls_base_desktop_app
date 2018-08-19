import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipesService} from '../../recipes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogRecipesComponent} from '../dialog/dialog-recipes.component';
// import { IDashboard, Dashboard } from '../../models/dashboard';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  moduleId: module.id,
  selector: 'ls-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  // dashboard: IDashboard;
  editing: boolean = false;

  // menuItems: MenuItem[];

  recipes = [
    {
      id: 1,
      name: 'Tortilla Soup',
      ingredients: [
        'Pinto Beans',
        'Vegitable Broth',
        'Onion'
      ],
      website: 'https://namelymarly.com/vegan-one-pot-chili-mac-cheese/',
      image: 'https://mywholefoodlife.com/wp-content/uploads/2017/01/Slow-Cooker-Tortilla-Soup-My-Whole-Food-Life.jpg',
      prepTime: 15,
      cookTime: 240,
      difficulty: 1,

    },
    {
      id: 2,
      name: 'Chilli Mac',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://namelymarly.com/vegan-one-pot-chili-mac-cheese/',
      image: 'https://cdn.namelymarly.com/wp-content/uploads/2017/01/20170131_Chili_Mac_Cheese_01-640x960.jpg',
      prepTime: 10,
      cookTime: 30,
      difficulty: 3,

    },
    {
      id: 3,
      name: 'Veggie Burgers',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://cookieandkate.com/2013/sweet-potato-black-bean-veggie-burgers/',
      image: 'https://cookieandkate.com/images/2013/05/sweet-potato-black-bean-veggie-burgers-recipe-0.jpg',
      prepTime: 30,
      cookTime: 20,
      difficulty: 5,

    },
    {
      id: 4,
      name: 'Vegan Lo Mein',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://www.brandnewvegan.com/recipes/veggie-lo-mein',
      image: 'https://www.brandnewvegan.com/wp-content/uploads/2016/06/veggie-lo-mein-v.jpg',
      prepTime: 30,
      cookTime: 20,
      difficulty: 5,

    },
    {
      id: 1,
      name: 'Tortilla Soup',
      ingredients: [
        'Pinto Beans',
        'Vegitable Broth',
        'Onion'
      ],
      website: 'https://namelymarly.com/vegan-one-pot-chili-mac-cheese/',
      image: 'https://mywholefoodlife.com/wp-content/uploads/2017/01/Slow-Cooker-Tortilla-Soup-My-Whole-Food-Life.jpg',
      prepTime: 15,
      cookTime: 240,
      difficulty: 1,

    },
    {
      id: 2,
      name: 'Chilli Mac',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://namelymarly.com/vegan-one-pot-chili-mac-cheese/',
      image: 'https://cdn.namelymarly.com/wp-content/uploads/2017/01/20170131_Chili_Mac_Cheese_01-640x960.jpg',
      prepTime: 10,
      cookTime: 30,
      difficulty: 3,

    },
    {
      id: 3,
      name: 'Veggie Burgers',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://cookieandkate.com/2013/sweet-potato-black-bean-veggie-burgers/',
      image: 'https://cookieandkate.com/images/2013/05/sweet-potato-black-bean-veggie-burgers-recipe-0.jpg',
      prepTime: 30,
      cookTime: 20,
      difficulty: 5,

    },
    {
      id: 4,
      name: 'Vegan Lo Mein',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://www.brandnewvegan.com/recipes/veggie-lo-mein',
      image: 'https://www.brandnewvegan.com/wp-content/uploads/2016/06/veggie-lo-mein-v.jpg',
      prepTime: 30,
      cookTime: 20,
      difficulty: 5,

    },
    {
      id: 1,
      name: 'Tortilla Soup',
      ingredients: [
        'Pinto Beans',
        'Vegitable Broth',
        'Onion'
      ],
      website: 'https://namelymarly.com/vegan-one-pot-chili-mac-cheese/',
      image: 'https://mywholefoodlife.com/wp-content/uploads/2017/01/Slow-Cooker-Tortilla-Soup-My-Whole-Food-Life.jpg',
      prepTime: 15,
      cookTime: 240,
      difficulty: 1,

    },
    {
      id: 2,
      name: 'Chilli Mac',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://namelymarly.com/vegan-one-pot-chili-mac-cheese/',
      image: 'https://cdn.namelymarly.com/wp-content/uploads/2017/01/20170131_Chili_Mac_Cheese_01-640x960.jpg',
      prepTime: 10,
      cookTime: 30,
      difficulty: 3,

    },
    {
      id: 3,
      name: 'Veggie Burgers',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://cookieandkate.com/2013/sweet-potato-black-bean-veggie-burgers/',
      image: 'https://cookieandkate.com/images/2013/05/sweet-potato-black-bean-veggie-burgers-recipe-0.jpg',
      prepTime: 30,
      cookTime: 20,
      difficulty: 5,

    },
    {
      id: 4,
      name: 'Vegan Lo Mein',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://www.brandnewvegan.com/recipes/veggie-lo-mein',
      image: 'https://www.brandnewvegan.com/wp-content/uploads/2016/06/veggie-lo-mein-v.jpg',
      prepTime: 30,
      cookTime: 20,
      difficulty: 5,

    },
    {
      id: 1,
      name: 'Tortilla Soup',
      ingredients: [
        'Pinto Beans',
        'Vegitable Broth',
        'Onion'
      ],
      website: 'https://namelymarly.com/vegan-one-pot-chili-mac-cheese/',
      image: 'https://mywholefoodlife.com/wp-content/uploads/2017/01/Slow-Cooker-Tortilla-Soup-My-Whole-Food-Life.jpg',
      prepTime: 15,
      cookTime: 240,
      difficulty: 1,

    },
    {
      id: 2,
      name: 'Chilli Mac',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://namelymarly.com/vegan-one-pot-chili-mac-cheese/',
      image: 'https://cdn.namelymarly.com/wp-content/uploads/2017/01/20170131_Chili_Mac_Cheese_01-640x960.jpg',
      prepTime: 10,
      cookTime: 30,
      difficulty: 3,

    },
    {
      id: 3,
      name: 'Veggie Burgers',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://cookieandkate.com/2013/sweet-potato-black-bean-veggie-burgers/',
      image: 'https://cookieandkate.com/images/2013/05/sweet-potato-black-bean-veggie-burgers-recipe-0.jpg',
      prepTime: 30,
      cookTime: 20,
      difficulty: 5,

    },
    {
      id: 4,
      name: 'Vegan Lo Mein',
      ingredients: ['Chilli', 'Mac'],
      website: 'https://www.brandnewvegan.com/recipes/veggie-lo-mein',
      image: 'https://www.brandnewvegan.com/wp-content/uploads/2016/06/veggie-lo-mein-v.jpg',
      prepTime: 30,
      cookTime: 20,
      difficulty: 5,

    }
    ];

  // private lastDashboard: IDashboard;

  constructor(
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public recipesService: RecipesService) {
  }

  ngOnInit () {
    console.log('Initializing Recipes Component...');
  }

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
