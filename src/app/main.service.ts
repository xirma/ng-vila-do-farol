import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RoomsRoutingModule } from './routes/rooms-routing.module';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  static slides = [
    {src : 'assets/Img/vila-do-farol-25.jpg'},
    {src : 'assets/Img/vila-do-farol-29.jpg'},
    {src : 'assets/Img/vila-do-farol-63.jpg'}
  ];


  public form = new BehaviorSubject({});
  public sharedForm = this.form.asObservable();

  public paymentForm = new BehaviorSubject({});
  public sharedPaymentForm = this.paymentForm.asObservable();

  public total = new BehaviorSubject({});
  public sharedTotal = this.total.asObservable();


  public nights: number;

  setForm(form): void  {
    this.form.next(form);
  }


  setPaymentForm(paymentForm): void {
    this.paymentForm.next(paymentForm);
  }

  setNights(checkIn, checkOut): void {
    const ci = checkIn.split('-');
    const co = checkOut.split('-');

    const checkInYear = ci[0];
    const checkOutYear = co[0];
    const checkInMonth = ci[1];
    const checkOutMonth = co[1];
    const checkInDay = ci[2];
    const checkOutDay = co[2];

    const dateCI = new Date(checkInYear, checkInMonth, checkInDay);
    const dateCO = new Date(checkOutYear, checkOutMonth, checkOutDay);
    const timeCI = dateCI.getTime();
    const timeCO = dateCO.getTime();

    const nights =  (timeCO - timeCI) / 1000 / 60 / 60 / 24 ;

    this.setTotal(nights);
  }

  setTotal(nights) {

    let Form: object;
    this.sharedForm.subscribe(paymentForm => Form = paymentForm);

    const roomType = Form['roomType'];
    const numberAdults = Form['numberAdults'];
    const numberChildren = Form['numberChildren'];
    const oceanView = Form['oceanView'];
    const breakfast = Form['breakfast'];

    let roomPrice = 0;
    let childrenPrice = 0;

    let adults = 0;
    let children = 0;
    let people = 0;

    let breakfastPrice = 0;

    switch (roomType) {
      case 'Apartamento 1 Quarto': roomPrice = 1000; break;

      case 'Apartamento 2 Quartos': roomPrice = 2000; break;

      case 'Apartamento 3 Quartos': roomPrice = 3000; break;

      case 'Apartamento Adaptado': roomPrice = 1000; break;
    }

    switch (numberAdults) {
      case '1 Adulto': adults = 1; break;

      case '2 Adultos': adults = 2; break;

      case '3 Adultos': adults = 3; break;

      case '4 Adultos': adults = 4; break;

      case '5 Adultos': adults = 5; break;

      case '6 Adultos': adults = 6; break;
    }

    switch (numberChildren) {
      case 'Sem crianças': childrenPrice = 0; break;

      case '1 Criança': childrenPrice = 150; children = 1; break;

      case '2 Crianças': childrenPrice = 300; children = 2; break;

      case '3 Crianças': childrenPrice = 450; children = 3; break;

      case '4 Crianças': childrenPrice = 600; children = 4; break;

      case '5 Criança': childrenPrice = 750; children = 5; break;

      case '6 Criança': childrenPrice = 900; children = 6; break;
    }


    if (breakfast) {
      breakfastPrice = 50;
    }

    people = adults + children;

    const total = ( roomPrice + childrenPrice + (breakfastPrice * people)) * nights;

    this.total.next(total);
  }


  constructor() { }

}

  
