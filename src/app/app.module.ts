import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// our feature NgModule
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // include our TeslaBatteryModule
    TeslaBatteryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
