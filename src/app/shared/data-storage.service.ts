import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor( private http: Http, private recipeService: RecipeService ) {}

  storeRecipes() {
   return this.http.put(
      'https://ng-recipe-book-e1d82.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
    );
  }
  getRecipes() {
    this.http
      .get('https://ng-recipe-book-e1d82.firebaseio.com/recipes.json')
      /*.pipe(
        map( (response: string) => {
          const recipes: Recipe[] = response;
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipes['ingredients'] = [];
            }
          }
        })
      )*/
      /*.subscribe(
        recipes => {
          this.recipeService.setRecipes(recipes);
        }
      )*/;
  }

/*  getRecipes() {
    this.http.get('https://ng-recipe-book-e1d82.firebaseio.com/recipes.json')
      .pipe(
        map(
          response => {
            const recipes: any = response;
            for (let recipe of recipes) {
              if (!recipe['ingredients']) {
                console.log(recipe);
                recipes['ingredients'] = [];
              }
            }
            return recipes;
          }
        )
      )
      .subscribe(
        recipes => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }*/
}
