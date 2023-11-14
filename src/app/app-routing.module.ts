import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomAuthGuard} from "twenty-signin";
import {EventComponent} from "./event/event.component";
import {CaccaComponent} from "./cacca/cacca.component";

const routes: Routes = [
  {path: 'eventi', component: EventComponent, canActivate: [CustomAuthGuard]},
  {path: 'cacca', component: CaccaComponent},
  { path: '', redirectTo: 'eventi', pathMatch: 'full' },
  { path: '**', redirectTo: 'eventi' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
