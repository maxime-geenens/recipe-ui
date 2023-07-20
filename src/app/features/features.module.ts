import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { HomeComponent } from './home/home.component';
import { ToolModule } from './tool/tool.module';
import { StepModule } from './step/step.module';
import { IngredientModule } from './ingredient/ingredient.module';

@NgModule({
  imports: [
    SharedModule,
    RecipeModule,
    ToolModule,
    StepModule,
    IngredientModule,
  ],
  declarations: [HomeComponent],
  exports: [RecipeModule, ToolModule, StepModule, IngredientModule],
  providers: [RecipeService],
})
export class FeaturesModule {}
