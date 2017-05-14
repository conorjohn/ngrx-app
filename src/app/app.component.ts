import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import { Store } from '@ngrx/store';
import {SECOND, HOUR, ADVANCE, RECALL} from '../reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //the dollar at the end of a var signifies 'subject' or observable type
  click$ = new Subject<any>()
    .map((value) => ({type:HOUR, payload:parseInt(value)}));
  seconds$ = Observable
    .interval(1000)
    .mapTo({type: SECOND, payload:3});
  person$ = new Subject()
    .map((value) => ({payload: value, type: ADVANCE}));
  recall$ = new Subject();
  time;
  people;

  constructor(store: Store<any>){
    this.time = store.select('clock');
    this.people = store.select('people');
    // this.recall = store.select('recall');

    Observable.merge(
      this.click$,
      this.seconds$,
      this.person$,
      this.recall$
        .withLatestFrom(this.time, (_, y) => y)
        .map((time) => ({type:RECALL, payload:time}))
    ).subscribe(store.dispatch.bind(store));

    // Observable.interval(1000);
    // this.clock = this.click$.map(() => new Date());
  }
}
