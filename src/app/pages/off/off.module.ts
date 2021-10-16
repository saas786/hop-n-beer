import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffPageRoutingModule } from './off-routing.module';

import { OffPage } from './off.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffPageRoutingModule
  ],
  declarations: [OffPage]
})
export class OffPageModule {}
