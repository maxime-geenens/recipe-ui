import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReferencesService } from 'src/app/shared/services/references/references.service';
import { TypesService } from 'src/app/shared/services/references/types.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      //{ path: 'ingredients/list', component: IngredientListComponent },
    ]),
  ],
  declarations: [IngredientComponent, IngredientFormComponent],
  exports: [IngredientComponent, IngredientFormComponent],
  providers: [ReferencesService, TypesService],
})
export class IngredientModule {}
