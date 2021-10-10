import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirrePageRoutingModule } from './birre-routing.module';

import { BirrePage } from './birre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirrePageRoutingModule
  ],
  declarations: [BirrePage]
})
export class BirrePageModule {}
