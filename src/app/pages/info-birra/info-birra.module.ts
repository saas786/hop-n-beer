import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/components/header/header.module';
import { IonicModule } from '@ionic/angular';

import { InfoBirraPageRoutingModule } from './info-birra-routing.module';

import { InfoBirraPage } from './info-birra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    InfoBirraPageRoutingModule
  ],
  declarations: [InfoBirraPage]
})
export class InfoBirraPageModule {}
