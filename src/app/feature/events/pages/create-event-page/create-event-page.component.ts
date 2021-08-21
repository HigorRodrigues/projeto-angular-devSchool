import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../../models/event.model';

@Component({
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.scss']
})
export class CreateEventPageComponent implements OnInit {

  event: Event = new Event();
  
  eventsTypes: Array<string> = [
    'CONFERÊNCIA',
    'CURSO',
    'FEIRA',
    'MESA REDONDA',
    'PALESTRA',
    'REUNIÃO',
    'SEMINÁRIO',
    'SIMPÓSIO',
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(eventForm: NgForm){

  }
}
