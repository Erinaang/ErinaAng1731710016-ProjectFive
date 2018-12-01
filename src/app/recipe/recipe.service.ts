import { Injectable } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable(
//   {
//    providedIn: 'root'
// }
)
export class RecipeService {

recipeSelected=new EventEmitter<Recipe>();

private recipes:Recipe[]=[
  new Recipe('Resep Cap Enak',
    'Akan ku buat resep ter enak, enak cap enak pasti enak',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('meal',1),
      new Ingredient('strawberry',2)
    ]),
    new Recipe('A Test Recipe two','alweys delicious','../src/app/img/desain1.jpg',[
      new Ingredient('apel',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
    ];

    getRecipes(){
      return this.recipes.slice();
    }
    addIngredientsShoppingList(ingredient: Ingredient[]){
      this.slsService.addIngredients(ingredient);
    }

    getRecipe(index:number){
      return this.recipes [index] ;
    }

constructor(private slsService: ShoppingListService) { }

}
