import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

import { BookingRoutingModule } from '../routes/booking-routing.module';

import { BookingContainerComponent } from 'src/app/containers/booking/booking-container/booking-container.component';
import { BookingFormContainerComponent } from '../containers/booking/booking-form-container/booking-form-container.component';
import { FormComponent } from 'src/app/components/booking/form/form.component';
import { CalendarComponent } from 'src/app/components/booking/calendar/calendar.component';


import { PaymentFormContainerComponent } from '../containers/payment/payment-form-container.component';
import { PaymentFormComponent } from 'src/app/components/payment/payment-form/payment-form.component';
import { BookingDetailsComponent } from 'src/app/components/payment/booking-details/booking-details.component';

import { BookingConfirmContainerComponent } from '../containers/booking/booking-confirm-container/booking-confirm-container.component';

@NgModule({
  declarations: [
    BookingContainerComponent,
    BookingFormContainerComponent,
    FormComponent,
    CalendarComponent,
    PaymentFormContainerComponent,
    PaymentFormComponent,
    BookingDetailsComponent,
    BookingConfirmContainerComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    FullCalendarModule
  ]
})
export class BookingModule { }
