import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { RecipeService } from './services/recipe.service';
import { LocalizationService } from './services/third-party-api/localization.service';
import { ReferencesService } from './services/references/references.service';
import { TypesService } from './services/references/types.service';

export * as helper from './helpers/forms.validator';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  declarations: [LoadingSpinnerComponent],
  exports: [
    LoadingSpinnerComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    RecipeService,
    LocalizationService,
    ReferencesService,
    TypesService,
  ],
})
export class SharedModule {}
