import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MessageDialogComponent } from 'src/app/shared/messages/message-dialog/message-dialog.component';
import { SnackbarDialogComponent } from 'src/app/shared/messages/snackbar-dialog/snackbar-dialog.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input()
  usersList: Array<User> = []
  
  displayedColumns: string[] = ['id', 'nome', 'email', 'perfil', 'acoes'];
  dataSource = new MatTableDataSource<User>(this.usersList);

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private snack: MatSnackBar
    ) { 
    
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.usersList);
  }

  delete(id: number){
    this.userService.removeUser(id).subscribe( () => {
      this.dialog.open(MessageDialogComponent,
        {
          width: '300px',
          data: { message: "Usuário excluído com sucesso!"}
        }  
      )
      this.getAll();
    },
    err => {
      this.messageSnack(err.message)
    })
  }

  getAll(){
    this.userService.getAllUsers().subscribe( (users) => {
      this.usersList = users;
   })
  }

  messageSnack(message: string){
    this.snack.openFromComponent(SnackbarDialogComponent, {
      data: message,
      duration: 3500
    })
  }
}
