import {Component, Input} from '@angular/core';

@Component({
  selector: 'clock',
  template: `
    {{time}}
  `
})

export class ClockClass {
  @Input() time;
}
