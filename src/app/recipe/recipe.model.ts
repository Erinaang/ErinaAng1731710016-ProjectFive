import { Ingredient } from '../shared/ingredient.model';

export class Recipe
{
//   ingredient: any;
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredient:Ingredient[];
    public ingredients:Ingredient[];
    constructor(name:string,desc:string,imagePath:string,ingredient:Ingredient[])
    {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredient=ingredient;
        this.ingredients=ingredient;
    }

}
