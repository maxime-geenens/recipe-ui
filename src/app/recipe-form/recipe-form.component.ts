import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  recipe: any;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') != null)
      this.recipeService
        .getRecipeDetail(this.route.snapshot.paramMap.get('id'))
        .subscribe({
          next: (r) => (this.recipe = r),
          error: (e) => console.log(e),
        });
    else {
      this.recipe = { id: null, name: null, description: null, type: null };
    }
  }

  onSubmit(): void {
    if (this.recipe.id) {
      this.recipeService.updateRecipe(this.recipe).subscribe({
        next: (r) => this.router.navigate(['/']),
        error: (e) => console.log(e),
      });
    } else {
      this.recipeService.createRecipe(this.recipe).subscribe({
        next: (r) => this.router.navigate(['/']),
        error: (e) => console.log(e),
      });
    }
  }
}
