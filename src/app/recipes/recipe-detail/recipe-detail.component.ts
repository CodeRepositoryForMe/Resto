import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  // @Input() recipe : Recipe;  // Comment as routing works 
  
  recipe : Recipe;
  id: number;

  //constructor(private recipeService : RecipeService) { }
  //constructor(private slService : ShoppingListService){}
  
  constructor(private recipeService : RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.route.params
    .subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeId(this.id);
      }
    )
  }

  AddToCart(){
    //this.slService.addIngredientsToShoppingCart(this.recipe.ingredients);
    this.recipeService.addIngredientsToCart(this.recipe.ingredients);
  }

  onEditRecipe(){
    // check why it is not working 
    //this.router.navigate(['edit',{relativeTo: this.route}]);
    this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route});
  }
}
