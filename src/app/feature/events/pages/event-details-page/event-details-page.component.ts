import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SnackbarDialogComponent } from 'src/app/shared/messages/snackbar-dialog/snackbar-dialog.component';
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
    private activated: ActivatedRoute,
    private snack: MatSnackBar
  ) { }

  ngOnInit(): void {

    const id = this.activated.snapshot.params.id;
    this.eventService.getById(Number(id)).subscribe( e =>{      
      this.event = e;
      this.messageSnack(`Evento ${this.event.name} carregado com sucesso`);
    },
    err => {
      this.messageSnack(err.message);
    })
  }

  messageSnack(message: string){
    this.snack.openFromComponent(SnackbarDialogComponent, {
      data: message,
      duration: 3500
    })
  }
}
