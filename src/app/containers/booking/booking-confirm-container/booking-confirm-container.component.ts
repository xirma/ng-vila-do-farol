import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-confirm-container',
  template: `
    <div class="space-around"> 
      <app-hotel-slider></app-hotel-slider>
      <app-details></app-details>
    </div>
  `,
  styles: [`
    div {
    display: flex;
    flex-direction: row;
  }

   @media	screen and (max-width: 768px) {
     div {
       flex-direction: column;
       align-items: center;
     }
}
  `]
})
export class BookingConfirmContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
