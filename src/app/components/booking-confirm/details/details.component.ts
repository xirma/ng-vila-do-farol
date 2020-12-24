import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  form;
  paymentForm;

  name: string;
  email: string;

  constructor(
    private service: MainService
  ) { }

  ngOnInit(): void {

    this.service.sharedPaymentForm.subscribe(paymentForm => this.paymentForm = paymentForm);
    this.name = this.paymentForm['fullName'];
    this.email = this.paymentForm['email'];

  }

}
