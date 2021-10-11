import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BirrePage } from './birre.page';

const routes: Routes = [
  {
    path: '',
    component: BirrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
})
export class BirrePageRoutingModule {}
