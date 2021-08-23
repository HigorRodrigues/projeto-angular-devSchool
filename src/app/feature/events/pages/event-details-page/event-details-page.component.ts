import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  templateUrl: './event-details-page.component.html',
  styleUrls: ['./event-details-page.component.scss']
})
export class EventDetailsPageComponent implements OnInit {

  event: Event;
  
  constructor(
    private eventService: EventService,
    private activated: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = this.activated.snapshot.params.id;
    this.eventService.getById(Number(id)).subscribe( e =>{
      this.event = e;
    },
    err => {
      console.log("Algo deu errado");
    })
  }

}
