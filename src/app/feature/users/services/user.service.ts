import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUsers(){
    return this.httpClient.get<Array<User>>(this.apiUrl + 'users');
  }

  getById(id: number){
    return this.httpClient.get<User>(this.apiUrl + `users/details/${Number(id)}`);
  }

  getUserByEmailAndPassword(email: string, password: string){    
    return this.httpClient.post(this.apiUrl + 'users/authenticate', 
      { email, password }
    );
  }

  addUser(user: User){
    return this.httpClient.post(this.apiUrl + 'users/create', user)
  }

  removeUser(id?: number){
    return this.httpClient.delete(this.apiUrl + `users/delete/${id}`);
  }

  updateUser(user: User){
    return this.httpClient.put(this.apiUrl + 'users/update', user);
  }

  getByName(query: string){
    return this.httpClient.get<Array<User>>(this.apiUrl + `users/find/${query}`);
  }
}
