import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualLoginPage } from './manual-login.page';

const routes: Routes = [
  {
    path: '',
    component: ManualLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualLoginPageRoutingModule {}
