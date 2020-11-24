import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-container',
  template: `
   <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class BookingContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
