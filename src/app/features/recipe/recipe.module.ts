import { NgModule } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@NgModule({
  imports: [SharedModule],
  declarations: [RecipeListComponent],
  exports: [RecipeListComponent],
  providers: [RecipeService],
})
export class RecipeModule {}
