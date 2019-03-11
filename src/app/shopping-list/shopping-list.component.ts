import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  wasClicked = false;

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {
  }

  ngOnInit() {
  }

  /************************ */
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onIngredientDeleted(i: number) {
    this.ingredients.splice(i, 1);
  }

  onIngredientMoveUp(i) {
    console.log(i);
    if (i > 0) {
      const removedElement = this.ingredients.splice(i, 1)[0];
      this.ingredients.splice(i - 1, 0, removedElement);
    }
  }

  onIngredientMoveDown(i) {
    console.log(i);
    if (i < this.ingredients.length) {
      const removedElement = this.ingredients.splice(i, 1)[0];
      console.log(removedElement);
      this.ingredients.splice(i + 1, 0, removedElement);
    }
  }

  onShoppingListDeleted() {
    this.ingredients.splice(0, this.ingredients.length);
  }
  /**** *************************** */
  onClick(i) {
    this.wasClicked = !this.wasClicked;
    console.log(event.eventPhase);
    if (!i.bubbles) {
      console.log('bubbles');
    }
  }
}


