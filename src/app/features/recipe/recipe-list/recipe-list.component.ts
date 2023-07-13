import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeList!: IRecipe[];
  selectedRecipe: any;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeList = this.recipeService.getRecipeList('FR');
  }

  onSelect(recipe: any): void {
    this.selectedRecipe = recipe;
  }

  onDelete(recipe: any): void {
    this.recipeService.deleteRecipe(recipe.id).subscribe({
      next: (r) => this.ngOnInit(),
      error: (e) => console.log(e),
    });
  }
}
