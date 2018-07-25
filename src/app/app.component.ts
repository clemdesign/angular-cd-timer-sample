import {Component, ViewChild} from '@angular/core';
import {CdTimerComponent, TimeInterface} from '../frameworks/cd-timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('basicTimer') basicTimer: CdTimerComponent;

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

  doActionBasicTimer(action: String) {
    switch (action) {
      case 'start':
        this.basicTimer.start();
        break;
      case 'resume':
        this.basicTimer.resume();
        break;
      case 'reset':
        this.basicTimer.reset();
        break;
      default:
        this.basicTimer.stop();
        break;
    }
  }
}
