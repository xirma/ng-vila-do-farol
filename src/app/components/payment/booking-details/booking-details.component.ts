import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  checkinDate = '16/04/2021';
  checkoutDate = '17/05/2021';
  roomType: string;
  numberAdults: string;
  numberChildren: string;
  oceanView: boolean;
  breakfast: boolean;
  total = '5.500,00';

  form;

  constructor(
    private service: MainService
  ) { }

  ngOnInit(): void {
    // this.service.numberAdults.subscribe(numberAdults => this.service.numberAdults = this.numberAdults);
    this.service.sharedForm.subscribe(form => this.form = form);

    this.roomType = this.form['roomType'];
    this.numberAdults = this.form['numberAdults'];
    this.numberChildren = this.form['numberChildren'];
    this.oceanView = this.form['oceanView'];
    this.breakfast = this.form['breakfast']


    console.log(this.breakfast);
  }

}
