import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from '../../../../models/recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  recipe!: IRecipe;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') != null)
      this.recipe = this.recipeService.getRecipe(
        this.route.snapshot.paramMap.get('id'),
        'FR'
      );
    else {
      console.log('No id found in URL param.');
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
