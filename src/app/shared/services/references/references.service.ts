import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reference } from 'src/app/models/references/reference.model';
import { UnitRef } from 'src/app/models/references/unit-ref.model';

@Injectable({
  providedIn: 'root',
})
export class ReferencesService {
  constructor(private http: HttpClient) {}

  getUnitRefList(lang: String): Observable<UnitRef[]> {
    return this.http.get<UnitRef[]>(baseApi + `/units/lang/${lang}`);
  }

  getIngredientRefListByType(
    type: String,
    lang: String
  ): Observable<Reference[]> {
    return this.http.get<Reference[]>(
      baseApi + `/ingredients/type/${type}/lang/${lang}`
    );
  }

  getToolRefListByType(type: String, lang: String): Observable<Reference[]> {
    return this.http.get<Reference[]>(
      baseApi + `/tools/type/${type}/lang/${lang}`
    );
  }

  createIngredientRef(ref: Reference): Observable<Reference> {
    return this.http.post<Reference>(baseApi + `/ingredient/add`, ref);
  }

  createToolRef(ref: Reference): Observable<Reference> {
    return this.http.post<Reference>(baseApi + `/tool/add`, ref);
  }
}

const baseApi = '/api/references';
