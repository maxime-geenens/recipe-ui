import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RecipeDetail } from '../../models/recipe-detail.model';
import { Recipe } from '../../models/recipe.model';

const baseApi = '/api/recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  getRecipeList(lang: String): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(baseApi + `/lang/${lang}`);
  }

  // TODO: create API in backend !!
  getRecipe(id: any): Observable<Recipe> {
    return this.http.get<Recipe>(baseApi + `/id/${id}`);
  }

  getRecipeDetail(id: any): Observable<RecipeDetail> {
    return this.http.get<RecipeDetail>(baseApi + `/detail/${id}`)
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(baseApi + `/create`, recipe);
  }

  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(baseApi + `/update`, recipe);
  }

  deleteRecipe(id: any) {
    return this.http.delete(baseApi + `/delete/${id}`);
  }
}
