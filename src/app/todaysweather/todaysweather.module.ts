import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodaysweatherPageRoutingModule } from './todaysweather-routing.module';

import { TodaysweatherPage } from './todaysweather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodaysweatherPageRoutingModule
  ],
  declarations: [TodaysweatherPage]
})
export class TodaysweatherPageModule {}
