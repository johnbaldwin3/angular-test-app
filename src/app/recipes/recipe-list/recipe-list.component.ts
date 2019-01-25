import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes: Recipe[] = [
  //   new Recipe('Lasagne: The Good Stuff', 'Garfield\'s Fav', 'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-4-e1503516670834.jpg'),
  //   new Recipe('Pizza: The Best in the World', 'Chicago makes the best Pizza', 'https://giordanos.com/wp-content/uploads/Hero-image_1210-v2.jpg')
  // ];
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, 
              private router: Router,
              private route: ActivatedRoute ) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
