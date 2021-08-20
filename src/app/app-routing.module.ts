import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './feature/events/pages/events-page/events-page.component';
import { LoginPageComponent } from './feature/login/login-page/login-page.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "events"},
  {path: "events", component: EventsPageComponent},
  {path: "login", component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
