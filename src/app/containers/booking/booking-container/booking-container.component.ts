import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-container',
  template: `
   <route-outlet></route-outlet>
  `,
  styles: [
  ]
})
export class BookingContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
