import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/components/header/header.module';

import { IonicModule } from '@ionic/angular';

import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { SongsPageRoutingModule } from './songs-routing.module';

import { SongsPage } from './songs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    HeaderModule,
    SongsPageRoutingModule,
  ],
  declarations: [SongsPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class SongsPageModule {}
