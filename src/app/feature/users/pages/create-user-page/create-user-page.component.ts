import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarDialogComponent } from 'src/app/shared/messages/snackbar-dialog/snackbar-dialog.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent implements OnInit {

  user?: User;  
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm(){
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),            
    });
  }
  createUser(userForm: FormGroup){
    this.user = userForm.value
    this.user.profile = 'PARTICIPANTE';
    this.userService.addUser(this.user).subscribe(
      (u) => {
        if( !u ){
          return;
        }
        this.messageSnack("Usuário cadastrado com sucesso")
        this.router.navigateByUrl("/events");
      },
      err => {
        this.messageSnack("Erro ao cadastrar usuário");
      }
    )
  }

  messageSnack(message: string){
    this.snack.openFromComponent(SnackbarDialogComponent, {
      data: message,
      duration: 3500
    })
  }

  private gerarForm(){
    this.userForm 
  }

}
