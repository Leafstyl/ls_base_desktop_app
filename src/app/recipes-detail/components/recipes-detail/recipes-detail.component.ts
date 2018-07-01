import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from '../../../recipe';
import {RecipesService} from '../../../recipes/components/recipes/recipes.service';


@Component({
  selector: 'ls-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(
    public recipesService: RecipesService,
    public route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    console.log('Initializing ... Component...');
    this.getRecipe();
  }

  getRecipe (): void {
    // debugger;
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipesService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }


}
