import Ingredient from "./ingredient.ts";

export default class Ingredients {

    ingredients: Ingredient[];

    constructor(ingredients: any){
        this.ingredients = ingredients;
    }

    static load(data: any) {
        return new Ingredients(data.data.map(Ingredient.from))
    }

}