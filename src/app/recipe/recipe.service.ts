import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'; //subject gak bisa
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable(
//   {
//    providedIn: 'root'
// }
)
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


private recipes:Recipe[]=[
  new Recipe('Resep Cap Enak',
    'Akan ku buat resep ter enak, enak cap enak pasti enak',
    '../src/app/img/recipe.JPEG',[
      new Ingredient('meal',1),
      new Ingredient('strawberry',2)
    ]),
    new Recipe('A Test Recipe two','alweys delicious','../src/app/img/desain1.jpg',[
      new Ingredient('apel',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
    ];

    constructor(private slService: ShoppingListService){}
    
    setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice())
    }

    getRecipes(){
      return this.recipes.slice();
    }
    addIngredientsShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
    }

    getRecipe(index:number){
      return this.recipes [index] ;
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
      this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());
    }
}
