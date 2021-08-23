import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventComponent } from './components/event/event.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateEventPageComponent } from './pages/create-event-page/create-event-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//imports from material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { EditEventPageComponent } from './pages/edit-event-page/edit-event-page.component';
import { EventDetailsPageComponent } from './pages/event-details-page/event-details-page.component';

const material = [
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    EventListComponent,
    EventComponent,
    EventsPageComponent,
    CreateEventPageComponent,
    EditEventPageComponent,
    EventDetailsPageComponent
  ],
  imports: [
    ...material,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class EventsModule { }
