import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoBirraPage } from './info-birra.page';

const routes: Routes = [
  {
    path: '',
    component: InfoBirraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoBirraPageRoutingModule {}
