import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselComponent } from './carousel.component';
import { CarouselPreviousButtonComponent } from './carousel-previous-button.component';
import { CarouselSlideDirective } from './slide.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselPreviousButtonComponent, CarouselComponent, CarouselSlideDirective],
  exports: [CarouselComponent, CarouselSlideDirective],
})
export class CarouselModule {}
