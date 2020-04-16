import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarmcountriesPage } from './warmcountries.page';

const routes: Routes = [
  {
    path: '',
    component: WarmcountriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarmcountriesPageRoutingModule {}
