import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = environment.apiUrl;
  
  constructor(
    private httpClient: HttpClient,
    
  ) { }

  getAll(){
    return this.httpClient.get<Array<Event>>(this.apiUrl + 'events');
  }
}
