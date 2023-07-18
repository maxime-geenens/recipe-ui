import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Type } from 'src/app/models/types/type.model';
import { TypesService } from 'src/app/shared/services/references/types.service';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  submitted: boolean = false;
  recipeForm!: FormGroup;
  recipe!: Recipe;
  typeList!: Type[];
  title!: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private typeService: TypesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    let newRecipe = false;

    this.recipeForm = this.fb.group({
      rName: ['', [Validators.required, Validators.minLength(3)]],
      rType: ['', Validators.required],
      rDesc: ['', [Validators.required, Validators.minLength(30)]],
    });

    this.typeService.getRecipeTypeList('FR').subscribe({
      next: (r: Type[]) => (this.typeList = r),
      error: (e) => console.log(e),
    });

    if (this.route.snapshot.paramMap.get('id') != null) {
      this.recipeService
        .getRecipe(this.route.snapshot.paramMap.get('id'))
        .subscribe({
          next: (r: Recipe) => (this.recipe = r),
          error: (e) => console.log(e),
        });
      console.log('this.recipe :: ' + this.recipe);
    } else {
      console.log('No id found in URL param.');
      newRecipe = true;
    }

    this.typeService.getRecipeTypeList('FR').subscribe({
      next: (r) => (this.typeList = r),
      error: (e) => console.log(e),
    });

    if (newRecipe) {
      this.title = 'Create Recipe';
    } else {
      this.title = 'Edit Recipe';
      this.recipeForm.controls['rName'].setValue(this.recipe.name);
      this.recipeForm.controls['rType'].setValue(this.recipe.type);
      this.recipeForm.controls['rDesc'].setValue(this.recipe.description);
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.recipeForm.invalid) {
      return;
    }

    this.recipe = Object.assign(this.recipe, this.recipeForm.value);

    if (this.recipe.id) {
      this.updateRecipe();
    } else {
      this.saveRecipe();
    }
  }

  saveRecipe(): void {
    this.recipeService.createRecipe(this.recipe).subscribe({
      next: (r) => this.router.navigate(['/recipes']),
      error: (e) => console.log(e),
    });
  }

  updateRecipe(): void {
    this.recipeService.updateRecipe(this.recipe).subscribe({
      next: (r) => this.router.navigate(['/recipes']),
      error: (e) => console.log(e),
    });
  }

  cancel(): void {
    this.submitted = false;
    this.recipeForm.reset();
  }

  get f() {
    return this.recipeForm.controls;
  }
}
