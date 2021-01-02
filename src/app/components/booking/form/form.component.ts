import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { buildEventRangeKey } from '@fullcalendar/angular';
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
  Adults: string[];

  Children: string[] = ['Sem crianças', '1 Criança', '2 Crianças', '3 Crianças', '4 Crianças', '5 Crianças', '6 Crianças'];

  minCheckOutDate = new BehaviorSubject('');
  sharedMinCheckOutDate = this.minCheckOutDate.asObservable();
  minCheckOut: string;

  today: string;

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
    this.today = this.getToday();
    this.sharedMinCheckOutDate.subscribe(date => this.minCheckOut = date);
    this.sharedAdults.subscribe(adults => this.Adults = adults);
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
  }

  changeAdults(e): void {
    this.form.get('numberAdults').setValue(e.target.value, {
      onlySelf: true
    });
  }

  changeChildren(e): void {
    this.form.get('numberChildren').setValue(e.target.value, {
      onlySelf: true
    });
  }

  setMinCheckOutDate(e): void {
    const day = 87264000;

    const checkInDate = e.target.value;
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

  submit(): boolean {
    const Form = this.form.value;
    const {checkIn, checkOut, roomType, numberAdults, numberChildren, oceanView, breakfast } = this.form.value;

    this.service.setForm(Form);

    this.service.setNights(checkIn, checkOut);

    this.router.navigate(['/reservas/pagamento']);
    return false;
  }

}
