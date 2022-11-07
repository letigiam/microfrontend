import { Observable } from 'rxjs';

import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-users',

  templateUrl: 'users.component.html',
  styleUrls: [
    'users.component.css'
  ]
})

export class UsersComponent implements OnInit {
  title = 'Lista Utenti';
  singleUser: any;
  //users$: Observable<User[]> -> osserva una stringa di dati, in questoo caso un array di Users
  users: any;
  // public users: User[] = [];
  @Output('updateUser') updateUser = new EventEmitter<User>();
  userForm: FormGroup;

  constructor( private service: UserService, public fb: FormBuilder, ) {

    this.userForm = this.fb.group({
      id: null,
			name: null,
			lastname: null,
			fiscalcode: null,
			email:null,
      phone: null,
      province: null,
      age: null,
		});

  }

  ngOnInit(): void { 
    this.getUsers();
  }


  getClick(element: any) {
    
    this.singleUser = element;
    this.service.getUser(element.id).subscribe( response =>{
      this.userForm.patchValue({
        id: element.id,
        name: response.result.name,
        lastname: response.result.lastname,
        fiscalcode: response.result.fiscalcode,
        email: response.result.email,
        phone: response.result.phone,
        province: response.result.province,
        age: response.result.age
      })
    })
  }
  
  getUsers(){
    this.service.getUsers().subscribe( response => this.users = response.result)
  }

  modifyUser(){
    this.service.updateUser(this.userForm.value).subscribe( res => {    
      if(res.status == true) {
        Swal.fire(
          'Good job!',
          'User Update!',
          'success'
        )
      }
      this.getUsers();
    })
  }

  onDeleteUser(user: User) {
    this.service.deleteUser(this.singleUser.id).subscribe( res =>{
      //! in questo modo elimino l'utente e aggiorno la tabella
      this.getUsers();
    })
  }
}
