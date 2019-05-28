import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { MessagesComponent } from '../app/messages/messages.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: "home", component: DashboardComponent, pathMatch: 'full' },
  { path: "heroes", component: HeroesComponent },
  { path: "detail/:id", component : HeroDetailComponent },
  { path: "message", component: MessagesComponent },
  { path:"**", redirectTo : "home" },
  { path:"", redirectTo : "home", pathMatch : "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
