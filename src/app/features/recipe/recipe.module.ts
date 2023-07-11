import { NgModule } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@NgModule({
  imports: [SharedModule],
  declarations: [RecipeListComponent, RecipeFormComponent],
  exports: [RecipeListComponent, RecipeFormComponent],
  providers: [RecipeService],
})
export class RecipeModule {}
