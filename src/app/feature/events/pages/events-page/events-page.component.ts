import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.model';
@Component({
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  eventList: Array<Event> = [
    {
      id: 1,
      name: "Evento de Teste 1",
      description: "Esse é o evento de Teste 1",
      imageUrl: "https://st2.depositphotos.com/1823785/7196/i/600/depositphotos_71969287-stock-photo-people-hands-holding-colorful-word.jpg",
      startDate: new Date(),
      endDate: new Date()
    },
    {
      id: 2,
      name: "Evento de Teste 2",
      description: "Esse é o evento de Teste 2",
      imageUrl: "https://tanabi.sp.gov.br/media/capas/20170109131607.jpg",
      startDate: new Date(),
      endDate: new Date()
    },
    {
      id: 3,
      name: "Evento de Teste 3",
      description: "Esse é o evento de Teste 3",
      imageUrl: "https://st.depositphotos.com/1053646/1770/i/600/depositphotos_17700789-stock-photo-dance-club.jpg",
      startDate: new Date(),
      endDate: new Date()
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
