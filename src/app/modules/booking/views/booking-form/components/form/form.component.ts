import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  Rooms: any = ['Apartamento 1 Quarto', 'Apartamento 2 Quartos', 'Apartamento 3 Quartos', 'Apartamento Adaptado'];
  Adults: any = ['1 Adulto', '2 Adultos', '3 Adultos', '4 Adultos', '5 Adultos', '6 Adultos'];
  Children: any = ['Sem crianças', '1 Criança', '2 Crianças', '3 Crianças', '4 Crianças', '5 Crianças', '6 Crianças'];


  form: FormGroup = this.fb.group ({
    roomType: [null, Validators.required],
    numberAdults: [null, Validators.required] ,
    numberChildren: [null, Validators.required],
    oceanView: [null],
    breakfest: [null]
  }, Validators.required);

  ngOnInit(): void {

  }

  constructor(
    public fb: FormBuilder
  ) {}


  submit(): boolean {
    console.log(this.form.value);
    return false;
  }

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

}
