import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { RecipeFormComponent } from './recipe-form.component';

@Injectable({
  providedIn: 'root',
})
export class RecipeFormGuard implements CanDeactivate<RecipeFormComponent> {
  canDeactivate(
    component: RecipeFormComponent
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (component.recipeForm.dirty) {
      const name = component.recipeForm.get('name')?.value || 'New Recipe';
      return confirm(`Navigate away and lose all changes to ${name}?`);
    }
    return true;
  }
}
