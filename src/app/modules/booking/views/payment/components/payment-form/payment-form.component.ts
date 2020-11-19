import { Component, OnInit, Directive, ElementRef, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})

// @Directive({
//   selector: '[OnlyNumber]'
// })
// export class OnlyNumberDirective {

//   constructor(private el: ElementRef) { }

//   @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
//       const e = event as KeyboardEvent;
//       /*
//           8 -  for backspace
//           9 -  for tab
//           13 - for enter
//           27 - for escape
//           46 - for delete
//       */
//       if ([8, 9, 13, 27, 46].indexOf(e.keyCode) !== -1 ||
//           // Allow: Ctrl+A
//           (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
//           // Allow: Ctrl+C
//           (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
//           // Allow: Ctrl+V
//           (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
//           // Allow: Ctrl+X
//           (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
//           // Allow: home, end, left, right
//           (e.keyCode >= 35 && e.keyCode <= 39)) {
//           // let it happen, don't do anything
//           return;
//       }
//       // Ensure that it is a number and stop the keypress
//       if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//           e.preventDefault();
//       }
//   }

//   @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
//       this.validateFields(event);
//   }
//   // tslint:disable-next-line: typedef
//   validateFields(event: any) {
//       setTimeout(() => {
//           const numberRegEx = /^[0-9]+$/;
//           if (!numberRegEx.test(this.el.nativeElement.value)){
//               this.el.nativeElement.value = "";
//               event.preventDefault();
//           }
//       }, 100);
//   }
// }

export class PaymentFormComponent implements OnInit {

  Cities: any = ['Balneário Camboriú', 'Itajaí', 'Navegantes', 'Porto Belo'];
  Countries: any = ['Brasil', 'Portugal', 'Argentina', 'Alemanha', 'Estados Unidos'];

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
      postalCode: [null],
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
