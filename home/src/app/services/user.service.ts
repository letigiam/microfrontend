// import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import { environment } from './../../environments/environment';

import { FormattedResponse } from '../_models/formatted-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiurl = environment.APIURL;

  constructor(private http: HttpClient){}

  getUsers(): Observable<FormattedResponse> {
    return this.http.get<FormattedResponse>(this.apiurl);
  }

  getUser(id: number): Observable<FormattedResponse> {
    return this.http.get<FormattedResponse>(this.apiurl + '/' + id);
  }

  createUser(user: UserInterface): Observable<FormattedResponse> {
    return this.http.post<FormattedResponse>(this.apiurl, user);
  }

  updateUser(user: UserInterface): Observable<FormattedResponse>{
    // return this.http.put<User>(this.apiurl + '/' + user.id, user);
    return this.http.put<FormattedResponse>(`${this.apiurl}/${user.id}`, user);

  }

  deleteUser(user: User) : Observable<FormattedResponse>{
    return this.http.delete<FormattedResponse>(`${this.apiurl}/${user}`);
  }

}
