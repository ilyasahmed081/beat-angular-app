import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HoempageComponent } from './hoempage.component';

const routes: Routes = [
  { path: '', component: HoempageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoempageRoutingModule { }
