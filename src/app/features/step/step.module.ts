import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReferencesService } from 'src/app/shared/services/references/references.service';
import { TypesService } from 'src/app/shared/services/references/types.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { StepComponent } from './step/step.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      //{ path: 'ingredients/list', component: IngredientListComponent },
    ]),
  ],
  declarations: [StepComponent],
  exports: [StepComponent],
  providers: [ReferencesService, TypesService],
})
export class StepModule {}
