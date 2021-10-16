import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffPage } from './off.page';

const routes: Routes = [
  {
    path: '',
    component: OffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffPageRoutingModule {}
