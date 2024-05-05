import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { TopBarComponent } from 'src/app/layout/top-bar/top-bar.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';

@NgModule({
  declarations: [
    HomepageComponent,
    TopBarComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
  ]
})
export class HomepageModule { }
