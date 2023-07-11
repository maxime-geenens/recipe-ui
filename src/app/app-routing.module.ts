import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeFormComponent } from './features/recipe/recipe-form/recipe-form.component';
import { RecipeListComponent } from './features/recipe/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  { path: 'recipes', component: RecipeFormComponent },
  { path: 'recipes/:id', component: RecipeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
