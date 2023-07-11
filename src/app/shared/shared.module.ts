import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { RecipeFormComponent } from './components/forms/recipe-form/recipe-form.component';
import { RecipeService } from './services/recipe.service';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [LoadingSpinnerComponent, RecipeFormComponent],
  exports: [
    LoadingSpinnerComponent,
    RecipeFormComponent,
    CommonModule,
    RouterModule,
  ],
  providers: [RecipeService],
})
export class SharedModule {}
