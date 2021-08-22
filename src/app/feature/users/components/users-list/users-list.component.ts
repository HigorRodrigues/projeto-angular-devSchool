import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
    private router: Router
    ) { 
    
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.usersList);
  }

  delete(id: number){
    this.userService.removeUser(id).subscribe( () => {
      console.log("User removido com sucesso");
      // this.router.navigateByUrl("users/delete")
      this.userService.getAllUsers().subscribe( (users) => {
         this.usersList = users;
      })
    },
    err => {
      console.log(err);
    })
  }
}
