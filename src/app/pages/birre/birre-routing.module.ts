import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { BirrePage } from './birre.page';

const routes: Routes = [
  {
    path: '',
    component: BirrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),BrowserModule],
  exports: [RouterModule],
})
export class BirrePageRoutingModule {}
