import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';

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
    this.clock = Observable.merge(
      this.click$,
      Observable.interval(5000)
    ).map(() => new Date());

    // Observable.interval(1000);
    // this.clock = this.click$.map(() => new Date());
  }
}
