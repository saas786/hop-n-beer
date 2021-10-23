import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualLoginPageRoutingModule } from './manual-login-routing.module';

import { ManualLoginPage } from './manual-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualLoginPageRoutingModule
  ],
  declarations: [ManualLoginPage]
})
export class ManualLoginPageModule {}
