// import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiurl = environment.APIURL;

  constructor(private http: HttpClient){}
  // users: User[] = [
  //   {
  //     id: 1,
  //     name: 'Hidran1',
  //     lastname: 'Arias1',
  //     email: 'hidran@gmail.com',
  //     fiscalcode: 'RSAHRN72M22Z444S',
  //     province: 'Torino',
  //     phone: '454545455',
  //     age: 43
  //   },
  //   {
  //     id: 2,
  //     name: 'Hidran2',
  //     lastname: 'Arias2',
  //     email: 'hidran@gmail.com',
  //     fiscalcode: 'RSAHRN72M22Z444S',
  //     province: 'Torino',
  //     phone: '454545455',
  //     age: 43
  //   },
  //   {
  //     id: 3,
  //     name: 'Hidran3',
  //     lastname: 'Arias3',
  //     email: 'hidran@gmail.com',
  //     fiscalcode: 'RSAHRN72M22Z444S',
  //     province: 'Torino',
  //     phone: '454545455',
  //     age: 43
  //   },
  //   {
  //     id: 4,
  //     name: 'Hidran4',
  //     lastname: 'Arias4',
  //     email: 'hidran@gmail.com',
  //     fiscalcode: 'RSAHRN72M22Z444S',
  //     province: 'Torino',
  //     phone: '454545455',
  //     age: 43
  //   }
  // ];

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiurl + '/' + id);
  }

  createUser(user: UserInterface): Observable<User> {
    return this.http.post<User>(this.apiurl, user);
  }

  updateUser(user: UserInterface): Observable<User>{
    console.log('user', user.id);
    
    // return this.http.put<User>(this.apiurl + '/' + user.id, user);
    return this.http.put<User>(`${this.apiurl}/${user.id}`, user);

  }

  deleteUser(user: User) {
    return this.http.delete<User>(`${this.apiurl}/${user}`);
  }

}
