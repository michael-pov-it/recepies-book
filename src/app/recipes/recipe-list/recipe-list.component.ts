// import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Component, OnDestroy, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
    /*= [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://toriavey.com/images/2015/04/Brisket-6-1-600x800.jpg'),
    new Recipe('Lasagna',
      'This is description About Lasagna',
      'https://www.kawalingpinoy.com/wp-content/uploads/2017/11/filipino-style-lasagna-2a.jpg')
  ];*/
    subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }*/

}
