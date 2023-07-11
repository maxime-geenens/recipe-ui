import { NgModule } from '@angular/core';

import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@NgModule({
  imports: [SharedModule, RecipeModule],
  declarations: [],
  exports: [RecipeModule],
  providers: [RecipeService],
})
export class FeaturesModule {}
