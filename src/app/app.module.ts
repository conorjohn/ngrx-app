import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { provideStore } from '@ngrx/store';
import {clock, people} from '../reducers';
import { AppComponent } from './app.component';
import {ClockClass} from "./clock";


@NgModule({
  declarations: [
    AppComponent,
    ClockClass
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ provideStore({clock, people})],
  bootstrap: [AppComponent]
})
export class AppModule { }
