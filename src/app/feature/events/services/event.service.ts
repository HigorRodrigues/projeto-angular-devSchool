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

  getById(id: Number){
    return this.httpClient.get<Event>(this.apiUrl + `events/details/${Number(id)}`);
  }

  create(event: Event){
    return this.httpClient.post<Event>(this.apiUrl + 'events/create', event);
  }

  delete(id: number){
    return this.httpClient.delete(this.apiUrl + `events/delete/${id}`);
  }

  updateEvent(event: Event){
    return this.httpClient.put(this.apiUrl + 'events/update', event);
  }
}
