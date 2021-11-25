import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OffPageRoutingModule } from './off-routing.module';
import { OffPage } from './off.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffPageRoutingModule
  ],
  declarations: [OffPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OffPageModule {}
