import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  recipe = { id: null, name: null, description: null };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if(this.recipe.id) {
      // Save new recipe
    } else {
      // Create new recipe
    }

    this.router.navigate(['/']);
  }
}
