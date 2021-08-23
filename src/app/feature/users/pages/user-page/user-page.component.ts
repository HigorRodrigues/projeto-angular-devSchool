import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  users: Array<User> = [];
  usersFiltered: Array<User> = [];

  constructor(
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.getAll()
  }

  onTextChange(query: any) {
    const name = query.target.value;
    if( name === "" ){
      this.getAll()
    }
    this.fetchUsers(name).subscribe( u => {
      this.usersFiltered = u
    })
  }

  getAll(){
    this.userService.getAllUsers().subscribe(
      (u) => {
        this.users = u;
        this.usersFiltered = u;
      },
      err => {
        console.log(err);
      }
    ); 
  }
  private fetchUsers(query: string): Observable<Array<User>> {
    return this.userService.getByName(query);
  }
}
