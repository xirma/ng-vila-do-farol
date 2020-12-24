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


  public form = new BehaviorSubject({});
  public sharedForm = this.form.asObservable();

  public paymentForm = new BehaviorSubject({});
  public sharedPaymentForm = this.paymentForm.asObservable();


  setForm(form): void  {
    this.form.next(form);
  }


  setPaymentForm(paymentForm): void {
    this.paymentForm.next(paymentForm);
  }


  constructor() { }

}

  
