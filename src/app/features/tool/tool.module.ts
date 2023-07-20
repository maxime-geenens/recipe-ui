import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReferencesService } from 'src/app/shared/services/references/references.service';
import { TypesService } from 'src/app/shared/services/references/types.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { ToolComponent } from './tool/tool.component';
import { ToolFormComponent } from './tool-form/tool-form.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      //{ path: 'ingredients/list', component: IngredientListComponent },
    ]),
  ],
  declarations: [ToolComponent, ToolFormComponent],
  exports: [ToolComponent, ToolFormComponent],
  providers: [ReferencesService, TypesService],
})
export class ToolModule {}
