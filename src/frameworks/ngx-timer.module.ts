import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimerComponent} from './ngx-timer';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimerComponent
  ],
  exports: [
    TimerComponent
  ]
})
export class NgxTimerModule {}