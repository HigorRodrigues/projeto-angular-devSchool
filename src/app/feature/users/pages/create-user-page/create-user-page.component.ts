import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent implements OnInit {

  user?: User;
  userPofiles: Array<string> = ['ADMIN', 'PARTICIPANTE'];
  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user = new User();
  }

  createUser(userForm: FormGroup){
    this.user = userForm.value
    this.user.id = 100;
    this.user.profile = 'PARTICIPANTE';
    this.userService.addUser(this.user).subscribe(
      (u) => {
        if( !u ){
          return;
        }
        this.router.navigateByUrl("/events");
      },
      err => {
        console.log("Algum erro aconteceu");
      }
    )
  }

  private gerarForm(){
    this.userForm 
  }

}
