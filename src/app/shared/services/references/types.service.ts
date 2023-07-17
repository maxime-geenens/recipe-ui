import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Type } from 'src/app/models/types/type.model';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  constructor(private http: HttpClient) {}

  getRecipeTypeList(lang: String): Observable<Type[]> {
    return this.http.get<Type[]>(baseApi + `/recipes/typeByLang/${lang}`);
  }

  getIngredientTypeList(lang: String): Observable<Type[]> {
    return this.http.get<Type[]>(baseApi + `/ingredients/typeByLang/${lang}`);
  }

  getToolTypeList(lang: String): Observable<Type[]> {
    return this.http.get<Type[]>(baseApi + `/tools/typeByLang/${lang}`);
  }
}

const baseApi = '/api/references';
