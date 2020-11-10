import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from 'src/app/modules/booking/Container/booking.component';
import { BookingFormContainerComponent } from 'src/app/modules/booking/views/booking-form/container/booking-form-container.component';
import { FormComponent } from './views/booking-form/components/form/form.component';
import { CalendarComponent } from './views/booking-form/components/calendar/calendar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BookingComponent, BookingFormContainerComponent, FormComponent, CalendarComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookingModule { }
