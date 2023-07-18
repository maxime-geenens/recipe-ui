import { NgModule } from '@angular/core';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailFormComponent } from './recipe-detail-form/recipe-detail-form.component';
import { RecipeFormGuard } from './recipe-form/recipe-form.guard';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'recipes/list', component: RecipeListComponent },
      { path: 'recipes/:id', component: RecipeComponent },
      {
        path: 'recipes/:id/edit',
        canDeactivate: [RecipeFormGuard],
        component: RecipeFormComponent,
      },
      { path: 'recipes/detail/:id', component: RecipeDetailComponent },
      { path: 'recipes/detail/:id/edit', component: RecipeDetailFormComponent },
      { path: 'recipes/:id/edit', component: RecipeFormComponent },
    ]),
  ],
  declarations: [
    RecipeListComponent,
    RecipeFormComponent,
    RecipeDetailComponent,
    RecipeComponent,
    RecipeDetailFormComponent,
  ],
  providers: [RecipeService],
})
export class RecipeModule {}
