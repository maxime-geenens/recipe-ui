import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser } from 'src/app/models/user.model';
import { delay, EMPTY, Observable, throwError } from 'rxjs';

const baseApi = '/api/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser?: IUser;

  constructor(private http: HttpClient) {}

  // TODO link to actual api once created on back side
  saveUser(user: IUser): Observable<IUser> {
    this.currentUser = { ...user };
    return EMPTY.pipe(delay(1000));
    //return this.http.post<IUser>(baseApi + `/save`, user);
  }

  logIn(user: IUser): Observable<any> {
    // TODO delegate credential check to backend
    // return this.http.post<any>(baseApi + `/logIn`, credentials);
    // Delete following when backend is ready:
    if (
      user.username !== 'Brocel' ||
      user.password !== 'test123456'
    )
      return throwError(() => logInError);

    this.currentUser = USERS.at(0);

    return EMPTY;
  }
}

const logInError = new Error('Invalid login !');

const USERS: IUser[] = [
  {
    id: 1,
    username: 'Brocel',
    email: 'test@test.com',
    password: 'test123456',
    authorities: ['ADMIN'],
    country: 'France',
    region: 'Occitanie',
    city: 'Montpellier',
  },
];
