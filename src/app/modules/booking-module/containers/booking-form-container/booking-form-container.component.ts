import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';


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
export class BookingFormContainerComponent implements OnInit{

  module = 'Reservas';

  constructor( private service: MainService ) {}

  ngOnInit (): void {
    this.service.setCurrentModule(this.module);
  }

}
