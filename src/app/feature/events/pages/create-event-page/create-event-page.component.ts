import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarDialogComponent } from 'src/app/shared/messages/snackbar-dialog/snackbar-dialog.component';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  templateUrl: './create-event-page.component.html',
  styleUrls: ['./create-event-page.component.scss']
})
export class CreateEventPageComponent implements OnInit {

  eventForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    urlImage: new FormControl('', [Validators.required, Validators.min(10)]),
    description: new FormControl('', 
        [Validators.required, Validators.min(10), Validators.max(255)]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required])
  });

  constructor(
    private eventService: EventService,
    private router: Router,
    private snack: MatSnackBar
  ) { }


  ngOnInit(): void {
  }

  onSubmit(eventForm: FormGroup){
    const event = eventForm.value;
    if( event ){
      this.eventService.create(event).subscribe( (event) => {
        this.messageSnack("Evento criado com sucesso");
        this.router.navigateByUrl('events')
      },
      err => {
        this.messageSnack(err.message);
      })
    }
  }

  messageSnack(message: string){
    this.snack.openFromComponent(SnackbarDialogComponent, {
      data: message,
      duration: 3500
    })
  }
}
