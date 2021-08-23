import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/shared/messages/message-dialog/message-dialog.component';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input()
  event: Event;
  
  @Input()
  card?: boolean = true
  
  constructor(
    private eventService: EventService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  
  delete(id: number){
    this.eventService.delete(id).subscribe( (event) => {
      this.dialog.open(MessageDialogComponent,
        {
          width: '300px',
          data: { message: "Evento excluído com sucesso!"}
        }  
      )
      this.router.navigate(['events']);
    },
    err => {
      console.log("Não foi possível excluir usuário");
    })
  }

  userAdmin(){
    const user = JSON.parse(sessionStorage.getItem('user'))
    return user.profile === 'ADMIN';
  }

}
