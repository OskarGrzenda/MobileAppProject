import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloudsPageRoutingModule } from './clouds-routing.module';

import { CloudsPage } from './clouds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloudsPageRoutingModule
  ],
  declarations: [CloudsPage]
})
export class CloudsPageModule {}
