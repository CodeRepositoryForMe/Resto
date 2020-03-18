import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static : true}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static: true}) amountInputRef : ElementRef;
  //@Output() ingredientAdded = new EventEmitter<ingredient>();
  constructor(private slServices : ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredientAdded = new ingredient(ingName, ingAmount)
    //this.ingredientAdded.emit(newIngredientAdded);
    this.slServices.addIngredientrs(newIngredientAdded);
  }

}
