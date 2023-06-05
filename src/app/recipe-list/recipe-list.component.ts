import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}

  // TODO: will be replaced by backend datas
  recipes = [
    {
      id: 1,
      name: 'Chocolate Chip Cookies',
      description: 'Sugar, flour, chocolate chips, etc.',
    },
    {
      id: 2,
      name: 'Wheat Bread',
      description: 'Yeast, flour, water, salt, etc.',
    },
    {
      id: 3,
      name: 'Apple Crumble',
      description: 'Sugar, flour, apples, butter, etc.',
    },
  ];

  selectedRecipe: any;

  ngOnInit(): void {}

  onSelect(recipe: any): void {
    this.selectedRecipe = recipe;
  }

  onDelete(recipe: any): void {
    this.recipes = this.recipes.filter((obj) => obj.id != recipe.id);
    // TODO: Call backend to delete instead of line above
  }
}
