import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //the dollar at the end of a var signifies 'subject'
  click$ = new Subject<any>();
  clock:any;
  // //Used In Template
  // clock:Observable<any> = Observable
  //   .interval(1000)
  //   .map(() => new Date());

  constructor(store: Store<any>){
    this.clock = store.select('clock');
    Observable.merge(
      this.click$.mapTo('hour'),
      Observable.interval(1000).mapTo('second')
    ).subscribe((type) => {
      store.dispatch({type})
    })

    // Observable.interval(1000);
    // this.clock = this.click$.map(() => new Date());
  }
}
