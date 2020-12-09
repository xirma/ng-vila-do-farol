import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-hotel-slider',
  templateUrl: './hotel-slider.component.html',
  styleUrls: ['./hotel-slider.component.scss'],
  animations: [
    trigger('sliderAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HotelSliderComponent implements OnInit {

  slides;

  currentSlide = 0;

  constructor(
    private service: MainService
  ) {
    this.slides = MainService.slides;
   }

  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  ngOnInit(): void {
  }

}
