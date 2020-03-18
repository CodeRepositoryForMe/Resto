import { ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<ingredient[]>(); 
    
    private ingredients : ingredient[] = [
        new ingredient('Lemon',2),
        new ingredient('Pea-nuts',50)
      ];

      getIngredients(){
          //alert(this.ingredients.length);
          return this.ingredients.slice();
      }

      addIngredientrs(ingredient : ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredientsToShoppingCart(ingredients : ingredient[])
      {
          //alert(ingredients.length);
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}