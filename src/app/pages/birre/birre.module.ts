import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirrePageRoutingModule } from './birre-routing.module';

import { BirrePage } from './birre.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    BirrePageRoutingModule
  ],
  declarations: [BirrePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BirrePageModule {}
