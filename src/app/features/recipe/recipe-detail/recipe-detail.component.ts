import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';

import { RecipeDetail } from 'src/app/models/recipe-detail.model';
import { Step } from 'src/app/models/step.model';
import { Tool } from 'src/app/models/tool.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail!: RecipeDetail;
  steps!: Step[];
  ingredients!: Ingredient[];
  tools!: Tool[];
  title: String = '';
  rId: Number = 0;
  rName: String = '';
  rType: String = '';
  rDesc: String = '';

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.getRecipeDetail(id);
      console.log(`Getting details for the recipe. (id =${id})`);
    } else {
      console.log('Id is null.');
    }
  }

  getRecipeDetail(id: any) {
    this.recipeService.getRecipeDetail(id).subscribe({
      next: (rd: RecipeDetail) => this.displayRecipeDetail(rd),
      error: (e) => console.log(e),
    });
  }

  displayRecipeDetail(rd: RecipeDetail): void {
    this.recipeDetail = rd;
    this.rId = rd.recipe.id;
    this.rName = rd.recipe.name;
    this.rType = rd.recipe.type.name;
    this.rDesc = rd.recipe.description;
    this.steps = rd.stepList;
    this.tools = rd.toolList;
    this.ingredients = rd.ingredientList;
    this.title = `${this.recipeDetail.recipe.name} [${this.recipeDetail.recipe.type.name}]`;
  }
}
