import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  src = '../../../assets/'
  width = window.innerWidth

  images = this.width < 1200 ? [
    this.src + 'carousel-mobile-1.svg',
    this.src + 'carousel-mobile-2.svg',
    this.src + 'carousel-mobile-3.svg',
  ] :
  [
    this.src + 'carousel-desktop-1.svg',
    this.src + 'carousel-desktop-2.svg',
    this.src + 'carousel-desktop-3.svg',
  ]

  currentIndex: number = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  jumpTo(i: number) {
    this.currentIndex = i;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
