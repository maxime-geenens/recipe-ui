import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { RecipeFormComponent } from './features/recipe/recipe-form/recipe-form.component';
import { RecipeListComponent } from './features/recipe/recipe-list/recipe-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/add', component: RecipeFormComponent },
  { path: 'recipes/edit/:id', component: RecipeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
