
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
    // manage recipes 
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Lasagne: The Good Stuff', 
            'Garfield\'s Fav', 
            'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-4-e1503516670834.jpg',
            [
                new Ingredient('Pasta', 6),
                new Ingredient('Sauce', 8),
                new Ingredient('Cheese', 20),
            ]),
        new Recipe(
            'Pizza: The Best in the World', 
            'Chicago makes the best Pizza', 
            'https://giordanos.com/wp-content/uploads/Hero-image_1210-v2.jpg',
            [
                new Ingredient('Dough', 1),
                new Ingredient('Sauce', 8),
                new Ingredient('Cheese', 100),
                new Ingredient('Pepperoni', 26),
                new Ingredient('Sausage', 20),
                new Ingredient('Anchovies', 12),
            ])
      ];

    constructor(private slService: ShoppingListService) {};
    
    getRecipes() {
        // returns new array, exact copy
        // prevents tampering
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        //TODO: prevent/group duplicate items on ingredients
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}