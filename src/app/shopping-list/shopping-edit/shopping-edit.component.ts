import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService }from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  // @Output() ingredientAdded= new EventEmitter<Ingredient>();

  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName, ingAmount);
    this.slsService.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }

}
