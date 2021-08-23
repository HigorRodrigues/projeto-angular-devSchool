import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../users/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarDialogComponent } from 'src/app/shared/messages/snackbar-dialog/snackbar-dialog.component';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm){
    this.userService.getUserByEmailAndPassword(loginForm.value.email, 
        loginForm.value.password)
        .subscribe( (user) => {
          if( !user ){
            this.messageSnack("E-mail ou senha está errado");            
            return;
          }
          sessionStorage.setItem('user', JSON.stringify(user));
          this.messageSnack("Login Realizado com sucesso")         
          return this.router.navigateByUrl("events");
        },
        err => {
          this.messageSnack(err.message)                   
        })
  }

  messageSnack(message: string){
    this.snack.openFromComponent(SnackbarDialogComponent, {
      data: message,
      duration: 3500
    })
  }
}
