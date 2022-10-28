import { User } from '../../app/Models/User';
import { UserInterface } from '../../app/interfaces/user';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = environment.APIURL;
  constructor( private http: HttpClient) {}

  createUser(user: UserInterface): Observable<User> {
    return this.http.post<User>(this.apiurl, user);
  }

}
