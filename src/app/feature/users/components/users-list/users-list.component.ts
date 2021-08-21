import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model';

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

  constructor() { 
    this.dataSource = new MatTableDataSource(this.usersList);
  }

  ngOnInit(): void {

  }

}
