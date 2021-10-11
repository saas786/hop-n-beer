import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MenuPagePage } from './menu-page.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),BrowserModule],
  exports: [RouterModule],
})
export class MenuPagePageRoutingModule {}
