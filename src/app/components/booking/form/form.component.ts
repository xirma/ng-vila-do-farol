import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setUncaughtExceptionCaptureCallback } from 'process';
import { MainService } from 'src/app/main.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  

  Rooms: any = ['Apartamento 1 Quarto', 'Apartamento 2 Quartos', 'Apartamento 3 Quartos', 'Apartamento Adaptado'];
  Adults: any = ['1 Adulto', '2 Adultos', '3 Adultos', '4 Adultos', '5 Adultos', '6 Adultos'];
  Children: any = ['Sem crianças', '1 Criança', '2 Crianças', '3 Crianças', '4 Crianças', '5 Crianças', '6 Crianças'];

  adults: string;

  form: FormGroup = this.fb.group ({
    checkIn: [null, Validators.required],
    checkOut: [ null, Validators.required],
    roomType: [null, Validators.required],
    numberAdults: [null, Validators.required] ,
    numberChildren: [null, Validators.required],
    oceanView: [null],
    breakfast: [null]
  });




  ngOnInit(): void {

  }

  constructor(
    public fb: FormBuilder,
    private service: MainService,
    private router: Router
  ) {}


  changeAdults(e): void {
    this.form.get('numberAdults').setValue(e.target.value, {
      onlySelf: true
    });
  }

  changeRooms(e): void {
    this.form.get('roomType').setValue(e.target.value, {
      onlySelf: true
    });
  }

  changeChildren(e): void {
    this.form.get('numberChildren').setValue(e.target.value, {
      onlySelf: true
    });


  }

  submit(): boolean {
    const Form = this.form.value;
    const {checkIn, checkOut, roomType, numberAdults, numberChildren, oceanView, breakfast } = this.form.value;
    

    this.service.setForm(Form);

    this.service.setNights(checkIn, checkOut);

    this.router.navigate(['/reservas/pagamento']);
    return false;
  }

}
