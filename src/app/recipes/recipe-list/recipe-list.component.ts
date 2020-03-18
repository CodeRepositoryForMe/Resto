import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // Comment this code to use property from recipe.service.ts Part2
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  /* // Move this code to recipe.service.ts  Part1
  recipes : Recipe[] = [
    new Recipe('test1','test it',
    'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2010/06/mix-veg-recipe-2.jpg'),
    new Recipe('test2','test it',
    'https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/02/Mix-Veg-Recipe-Step-By-Step-Instructions.jpg?fit=2349%2C1944&quality=30&strip=all&ssl=1'),
    new Recipe('test3','test it',
    'https://lh3.googleusercontent.com/proxy/UMNFwGYxhz6gVrCcEYQc30a_LJFhb6MJRz7mC2TwJMHxVEvwnL9hOdVapGNyNlVn8WlfLbHcMvAWglQ4aLPoLpXT1Ghfr2NnnYPns6yBv6v7qZwXido3n3MSySExkC3TLG7TyOqrae6kuqtshndqlH8CKo3OPffv1xNRSf3QZNvKP1x3qe1V7tfOLwr_FbSNKADUfmd1ZA')
  ];

    */

  recipes : Recipe[];

  constructor(private recipeService : RecipeService){}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  // Comment this code to use property from recipe.service.ts Part2
  /*
  OnRecipeSelected(recipe : Recipe){

    this.recipeWasSelected.emit(recipe);
    //alert("Recipe Selected !!!");
  }
  */

}
