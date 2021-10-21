import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualLoginPageRoutingModule } from './manual-login-routing.module';

import { ManualLoginPage } from './manual-login.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualLoginPageRoutingModule
  ],
  declarations: [ManualLoginPage, HeaderComponent]
})
export class ManualLoginPageModule {}
