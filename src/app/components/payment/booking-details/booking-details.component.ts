import { Component, OnInit, LOCALE_ID, DEFAULT_CURRENCY_CODE,  } from '@angular/core';
import { MainService } from 'src/app/main.service';

import {registerLocaleData} from '@angular/common';
import localept from '@angular/common/locales/pt';
registerLocaleData(localept, 'pt');



@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
        provide:  DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'
    }
]
})
export class BookingDetailsComponent implements OnInit {

  checkinDate: string;
  checkoutDate: string;
  roomType: string;
  numberAdults: string;
  numberChildren: string;
  oceanView: boolean;
  breakfast: boolean;
  total;

  form;

  constructor(
    private service: MainService
  ) { }

  ngOnInit(): void {
    this.service.sharedForm.subscribe(form => this.form = form);
    this.service.sharedTotal.subscribe(total => this.total = total)

    this.checkinDate = this.form['checkIn'];
    this.checkoutDate = this.form['checkOut'];
    this.roomType = this.form['roomType'];
    this.numberAdults = this.form['numberAdults'];
    this.numberChildren = this.form['numberChildren'];
    this.oceanView = this.form['oceanView'];
    this.breakfast = this.form['breakfast'];

  }

}
