import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipes: any;

  selectedRecipe: any;

  ngOnInit(): void {
    this.recipeService.getRecipeList('FR').subscribe({
      next: (r) => (this.recipes = r),
      error: (e) => console.log(e),
    });
  }

  onSelect(recipe: any): void {
    this.selectedRecipe = recipe;
  }

  onDelete(recipe: any): void {
    this.recipeService
      .deleteRecipe(recipe.id)
      .subscribe({
        next: (r) => this.ngOnInit(),
        error: (e) => console.log(e),
      });
  }
}
