import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    // manage recipes 
    
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

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        //TODO: prevent/group duplicate items on ingredients
        this.slService.addIngredients(ingredients);
    }

}