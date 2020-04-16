import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarmcountriesPageRoutingModule } from './warmcountries-routing.module';

import { WarmcountriesPage } from './warmcountries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarmcountriesPageRoutingModule
  ],
  declarations: [WarmcountriesPage]
})
export class WarmcountriesPageModule {}
