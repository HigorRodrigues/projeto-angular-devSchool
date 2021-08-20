import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input()
  events: Array<Event> = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
