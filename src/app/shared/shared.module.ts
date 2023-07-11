import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { RecipeService } from './services/recipe.service';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [LoadingSpinnerComponent],
  exports: [LoadingSpinnerComponent, CommonModule, RouterModule, FormsModule],
  providers: [RecipeService],
})
export class SharedModule {}
