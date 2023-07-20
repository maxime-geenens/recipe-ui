import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReferencesService } from 'src/app/shared/services/references/references.service';
import { TypesService } from 'src/app/shared/services/references/types.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientComponent } from './ingredient/ingredient.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      //{ path: 'ingredients/list', component: IngredientListComponent },
    ]),
  ],
  declarations: [IngredientComponent],
  exports: [IngredientComponent],
  providers: [ReferencesService, TypesService],
})
export class IngredientModule {}
