import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { provideStore } from '@ngrx/store';
import { clock } from '../reducers';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ provideStore({clock}).then(
    () => console.log('App running...'),
    err => console.log(err)
  )],
  bootstrap: [AppComponent]
})
export class AppModule { }
