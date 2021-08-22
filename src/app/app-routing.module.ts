import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventPageComponent } from './feature/events/pages/create-event-page/create-event-page.component';
import { EventsPageComponent } from './feature/events/pages/events-page/events-page.component';
import { LoginPageComponent } from './feature/login/login-page/login-page.component';
import { CreateUserPageComponent } from './feature/users/pages/create-user-page/create-user-page.component';
import { EditUserPageComponent } from './feature/users/pages/edit-user-page/edit-user-page.component';
import { UserPageComponent } from './feature/users/pages/user-page/user-page.component';

const eventRoutes: Routes =[
  {path: "", pathMatch: "full", redirectTo: "events"},
  {path: "events", component: EventsPageComponent},
  {path: "events/new", component: CreateEventPageComponent}
];

const userRoutes: Routes =[
  {path: "users", component: UserPageComponent},
  {path: "users/delete", pathMatch: "full", redirectTo: "users"},
  {path: "users/new", component: CreateUserPageComponent},
  {path: "users/edit/:id", component: EditUserPageComponent},
];

const routes: Routes = [
  ...eventRoutes,
  ...userRoutes,
  {path: "login", component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
