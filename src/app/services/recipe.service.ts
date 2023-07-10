import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseApi = '/api/recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipeList(lang: String) {
    return this.http.get<{}[]>(baseApi + `/lang/${lang}`);
  }

  getRecipeDetail(id: any) {
    return this.http.get(baseApi + `/detail/${id}`);
  }

  createRecipe(recipe: any) {
    return this.http.post(baseApi + `/create`, recipe);
  }

  updateRecipe(recipe: any) {
    return this.http.put(baseApi + `/update`, recipe);
  }

  deleteRecipe(id: any) {
    return this.http.delete(baseApi + `/delete/${id}`);
  }
}
