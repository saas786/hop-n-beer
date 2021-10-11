import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { SongsPage } from './songs.page';

const routes: Routes = [
  {
    path: '',
    component: SongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),BrowserModule],
  exports: [RouterModule],
})
export class SongsPageRoutingModule {}
