import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// services
import { BatteryService } from './tesla-battery.service';

// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
// components
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-NgModule
    BatteryService
  ],
  declarations: [TeslaBatteryComponent, TeslaCarComponent],
  exports: [
    // exporting so our root module can access
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule { }
