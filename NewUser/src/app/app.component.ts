import { Router } from '@angular/router';
import { UserService } from './../app/services/user.service';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newuser-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Add New User';
  userForm: FormGroup;
  user: any;

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    private router: Router
    ) {
    this.userForm = this.fb.group({
			name: [null, Validators.compose([Validators.required, Validators.pattern("([-'a-zA-ZÀ-ÖØ-öø-ÿ]{1,}(\\s{1})?){1,}")])],
			lastname: [null, Validators.compose([Validators.required, Validators.pattern("([-'a-zA-ZÀ-ÖØ-öø-ÿ]{1,}(\\s{1})?){1,}")])],
			fiscalcode: [null, Validators.compose([Validators.required, Validators.pattern("([-'a-zA-ZÀ-ÖØ-öø-ÿ]{1,}(\\s{1})?){1,}")])],
			email: [null, Validators.required],
      phone: [null, Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?([\s.-])?\d{2,3}([\s.-])?\d{4}$/)],
      province: [null, Validators.compose([Validators.required, Validators.pattern("([-'a-zA-ZÀ-ÖØ-öø-ÿ]{1,}(\\s{1})?){1,}")])],
      age: null,
		});
  }

  ngOnInit(): void {
    
  }

  saveUser() {
    this.userService.createUser(this.userForm.value).subscribe( response => {
      console.log('response', response);
      this.router.navigate(['users']);
    });
  }

}
