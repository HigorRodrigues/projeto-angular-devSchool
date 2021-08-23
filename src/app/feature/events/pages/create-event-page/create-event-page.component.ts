import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  onSubmit(eventForm: FormGroup){
    const event = eventForm.value;
    if( event ){
      this.eventService.create(event).subscribe( (event) => {
        this.router.navigateByUrl('events')
      },
      err => {
        console.log("Erro ao cadastrar event");
      })
    }
  }
}
