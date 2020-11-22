import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  Countries: any = ['Brasil', 'Argentina', 'Chile', 'Portugal', 'Alemanha'];
  Cities: any = [ 'Bombinhas', 'Balneário Camboriú', 'Itajaí', 'Porto Belo', 'Itapema'];

  paymentForm: FormGroup = this.fb.group ({
    creditCardInfo: this.fb.group ({
      creditCard: [null],
      cardName: [null, Validators.minLength(10)],
      expireDate: [null],
      cvv: [null, [ Validators.minLength(3), Validators.maxLength(3) ]],
    }),
    billingInfo: this.fb.group ({
      fullName: [null, Validators.minLength(10)],
      adress: [null, Validators.minLength(5)],
      city: [null],
      zipCode: [null],
      country: [null]
    })
  }, Validators.required);


  constructor(
    public fb: FormBuilder
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

}
