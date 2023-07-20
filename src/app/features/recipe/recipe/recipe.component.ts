import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe!: Recipe;

  errorMessage: String = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onDelete(): void {
    if (confirm(`Really delete the product: ${this.recipe.name}?`)) {
      this.recipeService.deleteRecipe(this.recipe.id).subscribe({
        next: () => console.log('Recipe deleted successfully'),
        error: (err) => (this.errorMessage = err),
      });
    }
  }
}
