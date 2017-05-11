import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //the dollar at the end of a var signifies 'subject'
  click$ = new Subject();
  clock;
  // //Used In Template
  // clock:Observable<any> = Observable
  //   .interval(1000)
  //   .map(() => new Date());

  constructor(){
    this.clock = this.click$.map(() => new Date());
  }
}
