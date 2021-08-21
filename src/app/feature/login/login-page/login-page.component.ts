import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../users/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar  
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){
    this.userService.getUserByEmailAndPassword(loginForm.value.email, 
        loginForm.value.password)
        .subscribe( (user) => {
          if( !user ){
            this.openSnackBar("E-mail ou senha está errado", "Erro");
            return;
          }
          sessionStorage.setItem('user', JSON.stringify(user));
          this.openSnackBar("Login Realizado com sucesso", "Ok");
          return this.router.navigateByUrl("events");
        },
        err => {
          this.openSnackBar("Algo está errado conosco", "Erro");
        })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4 * 1000,
    });
  }

}
