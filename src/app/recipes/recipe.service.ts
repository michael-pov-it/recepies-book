import { Recipe } from './recipe.model';
import { Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Fried Eggs',
      'This is a simply a test',
      'https://toriavey.com/images/2015/04/Brisket-6-1-600x800.jpg',
      [
        new Ingredient('sossiges', 2),
        new Ingredient('eggs', 3),
        new Ingredient('tomatos', 1)
      ]
    ),
    new Recipe(
      'Lasagna',
      'This is description About Lasagna',
      'https://www.kawalingpinoy.com/wp-content/uploads/2017/11/filipino-style-lasagna-2a.jpg',
      [
        new Ingredient('cheese', 2),
        new Ingredient('flour', 0.1),
        new Ingredient('mince', 0.3)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    // this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
