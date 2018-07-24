import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NgxTimerModule} from '../frameworks/ngx-timer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
