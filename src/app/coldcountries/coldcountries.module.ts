import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColdcountriesPageRoutingModule } from './coldcountries-routing.module';

import { ColdcountriesPage } from './coldcountries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColdcountriesPageRoutingModule
  ],
  declarations: [ColdcountriesPage]
})
export class ColdcountriesPageModule {}
