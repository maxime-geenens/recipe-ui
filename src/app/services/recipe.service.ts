import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IRecipeDetail } from '../models/recipe-detail.model';
import { IRecipe } from '../models/recipe.model';

const baseApi = '/api/recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipeList(lang: String) {
    return this.http.get<IRecipe[]>(baseApi + `/lang/${lang}`);
  }

  getRecipeDetail(id: any) {
    return this.http.get<IRecipeDetail>(baseApi + `/detail/${id}`);
  }

  createRecipe(recipe: IRecipe) {
    return this.http.post<IRecipe>(baseApi + `/create`, recipe);
  }

  updateRecipe(recipe: IRecipe) {
    return this.http.put<IRecipe>(baseApi + `/update`, recipe);
  }

  deleteRecipe(id: any) {
    return this.http.delete(baseApi + `/delete/${id}`);
  }
}
