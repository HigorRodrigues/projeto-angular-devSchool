import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventPageComponent } from './feature/events/pages/create-event-page/create-event-page.component';
import { EventsPageComponent } from './feature/events/pages/events-page/events-page.component';
import { LoginPageComponent } from './feature/login/login-page/login-page.component';

const eventRoutes: Routes =[
  {path: "", pathMatch: "full", redirectTo: "events"},
  {path: "events", component: EventsPageComponent},
  {path: "events/new", component: CreateEventPageComponent}
];

const routes: Routes = [
  ...eventRoutes,
  {path: "login", component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
