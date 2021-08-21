import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  users: Array<User> = [];

  constructor(
    private userService: UserService,
    ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (u) => {
        this.users = u;
      },
      err => {
        console.log(err);
      }
    ); 
  }

}
