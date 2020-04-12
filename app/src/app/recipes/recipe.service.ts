import { Recipe } from './recipe.model'
import { Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/shopping-list.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20),
        ]),
        new Recipe('Another Test Recipe', 'This is another a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [])
    ];
    constructor(private slService: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}