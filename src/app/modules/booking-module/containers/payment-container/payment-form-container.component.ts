import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-form-container',
  template: `
    <div class="display-flex space-around">
      <app-booking-details></app-booking-details>
      <app-payment-form></app-payment-form>
    </div>
  `,
  styles: [`
    div {
      display: flex;
      flex-direction: row;}
  `]
})
export class PaymentFormContainerComponent {

  constructor() { }

}
