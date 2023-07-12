import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [SharedModule, RecipeModule],
  declarations: [HomeComponent],
  exports: [RecipeModule],
  providers: [RecipeService],
})
export class FeaturesModule {}
