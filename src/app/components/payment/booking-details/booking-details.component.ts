import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  checkinDate = '16/02/2020';
  checkoutDate = '01/03/2020';
  roomType = 'apartamento 1 quarto';
  numberAdults = '2 adultos';
  numberChildren = 'sem crianças';
  oceanView = 'Vista para o mar';
  breakfast = 'Café da manhã incluso';
  total = '5.500,00';

  constructor() { }

  ngOnInit(): void {
  }

}
