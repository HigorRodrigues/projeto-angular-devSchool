import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
@Component({
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  eventList: Array<Event> = [];
  
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getAll().subscribe( (events) => {
      this.eventList = events;
    },
    err => {
      console.log(err);
    })
  }

  verifyEmptyEvents(){
    return this.eventList.length === 0;
  }

}
