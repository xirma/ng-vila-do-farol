import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-booking-form-container',
  template: `
  <div class="display-flex space-around">
    <app-form></app-form>
    <app-calendar></app-calendar>
  </div>
  `,
  styles: [`
    div {
      display: flex;
      flex-direction: row;}
  `]
})
export class BookingFormContainerComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
