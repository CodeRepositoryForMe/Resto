import {EventEmitter, Injectable} from '@angular/core'

import {Recipe} from './recipe.model'
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    //Part 2
    recipeSelected = new EventEmitter<Recipe>();
    //End Part 2

    //Part 1
    private recipes : Recipe[] = [
        new Recipe('test1','test it',
        'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2010/06/mix-veg-recipe-2.jpg',
        [new ingredient('Paneer',5), new ingredient('chilly', 2)]
        ),
        new Recipe('test2','test it',
        'https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/02/Mix-Veg-Recipe-Step-By-Step-Instructions.jpg?fit=2349%2C1944&quality=30&strip=all&ssl=1',
        [new ingredient('Potato',2), new ingredient('Chilly',3)]
        ),
        new Recipe('test3','test it',
        'https://i.ytimg.com/vi/Du9wzPf5TMk/hqdefault.jpg',
        [new ingredient('Tomato',1), new ingredient('Paneer',2)])
      ];

      getRecipe(){
          // this will be return exact copy of array 
          return this.recipes.slice();
      }

      getRecipeId(index : number){
         return this.recipes.slice()[index];   
      }
      // End Part 1

      constructor(private slService : ShoppingListService){}

        addIngredientsToCart(ingredients : ingredient[]){
          this.slService.addIngredientsToShoppingCart(ingredients);
        }


}