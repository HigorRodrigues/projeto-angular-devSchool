import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarDialogComponent } from 'src/app/shared/messages/snackbar-dialog/snackbar-dialog.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit {

  userPofiles: Array<string> = ['ADMIN', 'PARTICIPANTE'];
  userEdit: FormGroup;
  user?: User;

  constructor(
    private userService: UserService,
    private activated: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.params.id;
    if( id ){
      this.userService.getById(id).subscribe( (u) => {
        this.user = u;
        this.userEdit = new FormGroup({
          id: new FormControl(this.user.id, []),
          name: new FormControl(this.user.name, [Validators.required, Validators.minLength(3)]),
          email: new FormControl(this.user.email, [Validators.required, Validators.email]),
          password: new FormControl(this.user.password, [Validators.required, Validators.minLength(6)]),
          profile: new FormControl(this.user.profile, [Validators.required])
        })        
      },
      err => {
        this.messageSnack("Erro ao carregar usuário");    
        this.router.navigateByUrl("users")
      })
    } 
  }

  onSubmit(userForm: FormGroup){
    const userUpdate = userForm.value;
    this.userService.updateUser(userUpdate).subscribe((u) =>{
      this.messageSnack("Usuário editado com sucesso");
      this.router.navigateByUrl('users');
    },
    err =>{
      this.messageSnack("Erro ao editar usuário");
    })
  }

  messageSnack(message: string){
    this.snack.openFromComponent(SnackbarDialogComponent, {
      data: message,
      duration: 3500
    })
  }
}
