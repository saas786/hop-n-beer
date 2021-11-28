import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OffPageRoutingModule } from './off-routing.module';
import { OffPage } from './off.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffPageRoutingModule,
    HeaderModule
  ],
  declarations: [OffPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OffPageModule {}
