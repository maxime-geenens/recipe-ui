import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_API = '/api/recipes';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipeList(lang: String) {
    return this.http.get<{}[]>(BASE_API + `/lang/${lang}`);
  }

  getRecipeDetail(id: any) {
    return this.http.get(BASE_API + `/detail/${id}`);
  }

  createRecipe(recipe: any) {
    return this.http.post(BASE_API + `/create`, recipe);
  }

  updateRecipe(recipe: any) {
    return this.http.put(BASE_API + `/update`, recipe);
  }

  deleteRecipe(id: any) {
    return this.http.delete(BASE_API + `/delete/${id}`);
  }
}
