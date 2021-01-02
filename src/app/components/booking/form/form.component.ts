import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MainService } from 'src/app/main.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  Rooms: string[] = ['Apartamento 1 Quarto', 'Apartamento 2 Quartos', 'Apartamento 3 Quartos', 'Apartamento Adaptado'];

  adults = new BehaviorSubject([]);
  sharedAdults = this.adults.asObservable();
  Adults;

  children = new BehaviorSubject([]);
  sharedChildren = this.children.asObservable();
  Children;

  startDateValue: string = null;
  endDateValue: string = null;

  minCheckOut: string;
  today: string;

  form: FormGroup = this.fb.group ({
    checkIn: [this.startDateValue, Validators.required],
    checkOut: [this.endDateValue, Validators.required],
    roomType: [null, Validators.required],
    numberAdults: [null, Validators.required] ,
    numberChildren: [null, Validators.required],
    oceanView: [null],
    breakfast: [null]
  });

  ngOnInit(): void {
    this.today = this.service.getToday();

    this.sharedAdults.subscribe(adults => this.Adults = adults);
    this.sharedChildren.subscribe(children => this.Children = children);

    this.service.sharedMinCheckOutDate.subscribe(date => this.minCheckOut = date);
    this.service.sharedStartDateValue.subscribe(date => this.startDateValue = date);
    this.service.sharedEndDateValue.subscribe(date => this.endDateValue = date );

    console.log(this.startDateValue);
    console.log(this.endDateValue);
  }

  constructor(
    public fb: FormBuilder,
    private service: MainService,
    private router: Router
  ) {}

  changeRooms(e): void {
    this.form.get('roomType').setValue(e.target.value, {
      onlySelf: true
    });

    this.adultsFilter(e.target.value);
    this.childrenFilter(e.target.value);
  }

  changeAdults(e): void {
    this.form.get('numberAdults').setValue(e.target.value, {
      onlySelf: true
    });
  }

  checkOutSetter(e): void {
    this.service.setMinCheckOutDate(e.target.value);
  }

  changeChildren(e): void {
    this.form.get('numberChildren').setValue(e.target.value, {
      onlySelf: true
    });
  }


  adultsFilter(roomType: string): void {
    switch (roomType) {
      case 'Apartamento 1 Quarto':
        this.adults.next(['1 Adulto', '2 Adultos']);
        break;
      case 'Apartamento 2 Quartos':
        this.adults.next(['1 Adulto', '2 Adultos', '3 Adultos', '4 Adultos']);
        break;
      case 'Apartamento 3 Quartos':
        this.adults.next(['1 Adulto', '2 Adultos', '3 Adultos', '4 Adultos', '5 Adultos', '6 Adultos']);
        break;
      case 'Apartamento Adaptado':
        this.adults.next(['1 Adulto', '2 Adultos']);
        break;
    }
  }

  childrenFilter(roomType: string): void {
    switch (roomType) {
      case 'Apartamento 1 Quarto':
        this.children.next(['Sem crianças', '1 Criança']);
        break;
      case 'Apartamento 2 Quartos':
        this.children.next(['Sem crianças', '1 Criança', '2 Crianças']);
        break;
      case 'Apartamento 3 Quartos':
        this.children.next(['Sem crianças', '1 Criança', '2 Crianças', '3 Crianças', '4 Crianças']);
        break;
      case 'Apartamento Adaptado':
        this.children.next(['Sem crianças', '1 Criança']);
        break;
    }
  }

  submit(): boolean {
    const Form = this.form.value;
    console.log(Form);
    const {checkIn, checkOut, roomType, numberAdults, numberChildren, oceanView, breakfast } = this.form.value;

    this.service.setForm(Form);

    this.service.setNights(checkIn, checkOut);

    this.router.navigate(['/reservas/pagamento']);
    return false;
  }

}
