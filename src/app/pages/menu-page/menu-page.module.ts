import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPagePageRoutingModule } from './menu-page-routing.module';

import { MenuPagePage } from './menu-page.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPagePageRoutingModule
  ],
  declarations: [MenuPagePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MenuPagePageModule {}
