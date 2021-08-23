import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
@Component({
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  eventList: Array<Event> = [];
  eventFiltered: Array<Event> = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAll().subscribe( (events) => {
      this.eventList = events;
      this.eventFiltered = events;
    },
    err => {
      console.log(err);
    })
  }

  onTextChange(query: any) {
    const name = query.target.value;
    this.fetchEvents(name).subscribe( e => {
      this.eventFiltered = e
    })
  }

  private fetchEvents(query: string): Observable<Array<Event>> {
    const params = { q: query };
    return this.eventService.getByName(query);
  }

  verifyEmptyEvents(){
    return this.eventFiltered.length === 0;
  }

}
