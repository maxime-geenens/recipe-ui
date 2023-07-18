import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipeList = [];
  }

  ngOnInit(): void {
    this.recipeService.getRecipeList('FR').subscribe({
      next: (result) => (this.recipeList = result),
      error: (e) => console.log(e),
    });
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
}
