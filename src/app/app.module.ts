import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import {provideSigningModule} from "twenty-signin";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import { CaccaComponent } from './cacca/cacca.component';
import {TwentyfiveTableModule} from "twentyfive-table";

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    CaccaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideSigningModule(environment),
    HttpClientModule,
    TwentyfiveTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
