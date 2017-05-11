import { Component } from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  clock = Observable.interval(1000)
    .map(() => new Date());
}
