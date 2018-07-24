import { Component } from '@angular/core';
import {TimeInterface} from '../frameworks/ngx-timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  timerInfo = '';

  constructor() {
    this.timerInfo = '';
  }

  onComplete(data) {
    this.timerInfo = 'Finished !';
  }

  onTick(data: TimeInterface) {
    console.log('In Progress [' + data.tick_count.toString().padStart(4, '0') + ']');
  }

  onStart(data) {
    console.log('Started.');
  }
}
