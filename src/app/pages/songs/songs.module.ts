import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { SongsPageRoutingModule } from './songs-routing.module';

import { SongsPage } from './songs.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    SongsPageRoutingModule
  ],
  declarations: [SongsPage,HeaderComponent]
})
export class SongsPageModule {}
