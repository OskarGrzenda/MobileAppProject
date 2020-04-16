import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodaysweatherPage } from './todaysweather.page';

const routes: Routes = [
  {
    path: '',
    component: TodaysweatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodaysweatherPageRoutingModule {}
