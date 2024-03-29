import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  static slides = [
    {src : 'assets/Img/vila-do-farol-25.jpg'},
    {src : 'assets/Img/vila-do-farol-29.jpg'},
    {src : 'assets/Img/vila-do-farol-63.jpg'}
  ];

  // VARIABLES
 

  // OBSERVABLES
  public form = new BehaviorSubject({});
  public sharedForm = this.form.asObservable();

  public paymentForm = new BehaviorSubject({});
  public sharedPaymentForm = this.paymentForm.asObservable();

  public total = new BehaviorSubject({});
  public sharedTotal = this.total.asObservable();

  public minCheckOutDate = new BehaviorSubject('');
  public sharedMinCheckOutDate = this.minCheckOutDate.asObservable();

  public startDateValue = new BehaviorSubject('');
  public sharedStartDateValue = this.startDateValue.asObservable();

  public endDateValue = new BehaviorSubject('');
  public sharedEndDateValue = this.endDateValue.asObservable();

  public currentModule = new BehaviorSubject('');
  public sharedCurrentModule = this.currentModule.asObservable();

  // FUNCTIONS
  setForm(form): void  {
    this.form.next(form);
  }

  setPaymentForm(paymentForm): void {
    this.paymentForm.next(paymentForm);
  }

  setCurrentModule(module):void {
    this.currentModule.next(module);
    console.log(this.currentModule);
  }

  getToday(): string{
    let today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    if (dd < 10){
      dd = `0${dd}`;
    }

    if (mm < 10) {
      mm = `0${mm}`;
    }

    return today = `${yyyy}-${mm}-${dd}`;
  }

  endDateHandler(date: string): string{
    const day = 86000000;
    const entryValue = new Date (date);
    const entryValueTime = entryValue.getTime();

    const lessOneDay = entryValueTime - day;

    const endDate = new Date(lessOneDay);

    let dd: any = endDate.getDate();
    let mm: any = endDate.getMonth() + 1;
    const yyyy = endDate.getFullYear();

    if (dd < 10) {
      dd = `0${dd}`;
    }

    if (mm < 10) {
      mm = `0${mm}`;
    }

    const endDateString = `${yyyy}-${mm}-${dd}`;

    return endDateString;
  }

  setMinCheckOutDate(checkInDate): void {
    const day = 87264000;

    const ciDate = new Date (checkInDate);
    const ciTime = ciDate.getTime();

    const minCheckOutTime = ciTime + day;
    const minCheckOutDate = new Date(minCheckOutTime);

    let dd: any = minCheckOutDate.getDate();
    let mm: any = minCheckOutDate.getMonth() + 1;
    const yyyy = minCheckOutDate.getFullYear();

    if (dd < 10) {
      dd = `0${dd}`;
    }

    if (mm < 10) {
      mm = `0${mm}`;
    }

    const minCheckOut = `${yyyy}-${mm}-${dd}`;

    this.minCheckOutDate.next(minCheckOut);
  }


  setNights(checkIn, checkOut): void {

    const dateCI = new Date(checkIn);
    const dateCO = new Date(checkOut);

    const timeCI = dateCI.getTime();
    const timeCO = dateCO.getTime();

    const nights =  (timeCO - timeCI) / 1000 / 60 / 60 / 24 ;

    this.setTotal(nights);
  }

  setTotal(nights): void {

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

