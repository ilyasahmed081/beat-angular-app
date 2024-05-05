import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { CategoryCardComponent } from 'src/app/components/category-card/category-card.component';

@NgModule({
  declarations: [
    HomepageComponent,
    CarouselComponent,
    ProductCardComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
  ]
})
export class HomepageModule { }
