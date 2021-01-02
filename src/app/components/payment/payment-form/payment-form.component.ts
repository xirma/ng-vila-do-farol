import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  Countries: any = ['Brasil', 'Argentina', 'Chile', 'Portugal', 'Alemanha'];
  Cities: any = [ 'Bombinhas', 'Balneário Camboriú', 'Itajaí', 'Porto Belo', 'Itapema'];

  paymentForm: FormGroup = this.fb.group ({
    creditCard: [null],
    cardName: [null],
    expireDate: [null],
    cvv: [null],
    fullName: [null, [Validators.minLength(10), Validators.required]],
    email: [null,
      [Validators.pattern
      (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      Validators.required]],
    adress: [null, [Validators.required, Validators.minLength(10)]],
    city: [null],
    postalCode: [null, [Validators.pattern(/\d{5}[\-]?\d{3}/), Validators.required]],
    country: [null]

  });


  constructor(
    public fb: FormBuilder,
    private service: MainService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  changeCity(e): void {
    this.paymentForm.get('city').setValue(e.target.value, {
      onlySelf: true
    });
  }

  changeCountry(e): void {
    this.paymentForm.get('country').setValue(e.target.value, {
      onlySelf: true
    });
  }

  submit(): boolean {
  const PaymentForm = this.paymentForm.value;

  this.service.setPaymentForm(PaymentForm);

  this.router.navigate(['/reservas/confirmacao']);

  return false;
  }

}
