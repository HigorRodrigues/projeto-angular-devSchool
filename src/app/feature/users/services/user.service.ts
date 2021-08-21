import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserByEmailAndPassword(email: string, password: string){    
    return this.httpClient.post(this.apiUrl + 'users/authenticate', 
      { email, password }
    );
  }
}
