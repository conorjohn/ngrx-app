import { Component } from '@angular/core';
import {Observable, Subject} from "rxjs";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';

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

  constructor(){
    this.clock = Observable.merge(
      this.click$.mapTo('hour'),
      Observable.interval(1000).mapTo('second')
    )
      .scan((acc:Date, curr: string):Date => {
        const date = new Date(acc.getTime());
        if(curr === 'second'){
          date.setSeconds(date.getSeconds() + 1);
        }
        if(curr === 'hour'){
          date.setHours(date.getHours() + 1);
        }
        // date.setSeconds(date.getSeconds() + 1);

        return date;
      }, new Date());

    // Observable.interval(1000);
    // this.clock = this.click$.map(() => new Date());
  }
}
