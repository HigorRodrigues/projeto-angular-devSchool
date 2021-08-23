import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/feature/users/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userRegistred?: User;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const user = sessionStorage.getItem('user');
    if( user )
      this.userRegistred = JSON.parse(user);
  }

  exit(){
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

  userAdmin(){
    return this.userRegistred?.profile === "ADMIN";
  }


}
