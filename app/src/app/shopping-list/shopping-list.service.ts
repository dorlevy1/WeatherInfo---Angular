import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
export class ShoppingListService {
    ingredientUpdate = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] =
        [
            new Ingredient('Fruits', 2),
            new Ingredient('Apple', 1)
        ];

    getIngredients() {
        return this.ingredients.slice();

    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index);
        this.ingredientUpdate.next(this.ingredients.slice());
    }
    getIngredient(index: number) {
        return this.ingredients[index];
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientUpdate.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let i of ingredients) {
        //     this.addIngredient(i);
        // }
        this.ingredients.push(...ingredients)
        this.ingredientUpdate.next(this.ingredients.slice())
    }
    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient
        this.ingredientUpdate.next(this.ingredients.slice());
    }
}