import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventComponent } from './components/event/event.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

//imports from material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const material = [
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [
    EventListComponent,
    EventComponent,
    EventsPageComponent
  ],
  imports: [
    CommonModule,
    ...material,
    SharedModule
  ]
})
export class EventsModule { }
