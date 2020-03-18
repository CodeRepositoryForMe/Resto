import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

import {ShoppingListService} from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  /*
  
  ingredients : ingredient[] = [
    new ingredient('Lemon',2),
    new ingredient('Pea-nuts',50)
  ]

  */

  ingredients : ingredient[] ;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

}
