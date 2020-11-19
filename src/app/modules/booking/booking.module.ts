import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

import { BookingRoutingModule } from './booking-routing.module';

import { BookingComponent } from 'src/app/modules/booking/Container/booking.component';
import { BookingFormContainerComponent } from './views/booking/container/booking-form-container.component';
import { FormComponent } from './views/booking/components/form/form.component';
import { CalendarComponent } from './views/booking/components/calendar/calendar.component';


import { PaymentFormContainerComponent } from './views/payment/container/payment-form-container.component';
import { PaymentFormComponent } from './views/payment/components/payment-form/payment-form.component';
import { BookingDetailsComponent } from './views/payment/components/booking-details/booking-details.component';

@NgModule({
  declarations: [
    BookingComponent,
    BookingFormContainerComponent,
    FormComponent,
    CalendarComponent,
    PaymentFormContainerComponent,
    PaymentFormComponent,
    BookingDetailsComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    FullCalendarModule
  ]
})
export class BookingModule { }
