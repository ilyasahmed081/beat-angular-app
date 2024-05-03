import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoempageRoutingModule } from './hoempage-routing.module';
import { HoempageComponent } from './hoempage.component';


@NgModule({
  declarations: [
    HoempageComponent
  ],
  imports: [
    CommonModule,
    HoempageRoutingModule
  ]
})
export class HoempageModule { }
