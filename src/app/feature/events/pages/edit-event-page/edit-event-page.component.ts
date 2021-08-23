import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarDialogComponent } from 'src/app/shared/messages/snackbar-dialog/snackbar-dialog.component';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  templateUrl: './edit-event-page.component.html',
  styleUrls: ['./edit-event-page.component.scss']
})
export class EditEventPageComponent implements OnInit {

  eventForm: FormGroup;
  private eventId: number;
  private event?: Event;

  constructor(
    private eventService: EventService,
    private activated: ActivatedRoute,
    private router: Router,
    private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.eventId = this.activated.snapshot.params.id;
    this.eventService.getById(this.eventId).subscribe( e => {
      this.event = e;
      this.loadForm();
    },
    err => {
      console.log("Um erro aconteceu");
    })
  }

  loadForm(){
    this.eventForm = new FormGroup({
      id: new FormControl(this.event.id, [Validators.required]),
      name: new FormControl(this.event.name, [Validators.required]),
      urlImage: new FormControl(this.event.urlImage, [Validators.required, Validators.min(10)]),
      description: new FormControl(this.event.description, 
          [Validators.required, Validators.min(10), Validators.max(255)]),
      startDate: new FormControl(this.event.startDate, [Validators.required]),
      endDate: new FormControl(this.event.endDate, [Validators.required])
    })
  }

  eventEdit(form: FormGroup){
    const eventUpdate = form.value;
    this.eventService.updateEvent(eventUpdate).subscribe((e) =>{
      this.messageSnack("Evento editado com sucesso")
      this.router.navigateByUrl('events');
    },
    err =>{
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
