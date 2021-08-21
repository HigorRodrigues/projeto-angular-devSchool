import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.scss']
})
export class CreateEventPageComponent implements OnInit {

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

}
