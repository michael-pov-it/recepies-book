import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
// Don't add [ShoppingListService] in providers array because we add this provider into app.module.ts

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
    /*= [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 3)
  ];*/
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    // this.slService.ingredientsChanged
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }*/

}
