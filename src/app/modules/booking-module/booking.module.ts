import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BookingRoutingModule } from 'src/app/routes/booking-routing.module';

import { BookingContainerComponent } from 'src/app/modules/booking-module/containers/booking-container/booking-container.component';
import { BookingFormContainerComponent } from 'src/app/modules/booking-module/containers/booking-form-container/booking-form-container.component';
import { FormComponent } from 'src/app/modules/booking-module/components/booking/form/form.component';
import { CalendarComponent } from 'src/app/modules/booking-module/components/booking/calendar/calendar.component';


import { PaymentFormContainerComponent } from 'src/app/modules/booking-module/containers/payment-container/payment-form-container.component';
import { PaymentFormComponent } from 'src/app/modules/booking-module/components/payment/payment-form/payment-form.component';
import { BookingDetailsComponent } from 'src/app/modules/booking-module/components/payment/booking-details/booking-details.component';

import { BookingConfirmContainerComponent } from 'src/app/modules/booking-module/containers/booking-confirm-container/booking-confirm-container.component';
import { DetailsComponent } from 'src/app/modules/booking-module/components/booking-confirm/details/details.component';
import { HotelSliderComponent } from 'src/app/modules/booking-module/components/booking-confirm/hotel-slider/hotel-slider.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CreditCardDirectivesModule } from 'angular-cc-library';


@NgModule({
  declarations: [
    BookingContainerComponent,
    BookingFormContainerComponent,
    FormComponent,
    CalendarComponent,
    PaymentFormContainerComponent,
    PaymentFormComponent,
    BookingDetailsComponent,
    BookingConfirmContainerComponent,
    DetailsComponent,
    HotelSliderComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    FullCalendarModule,
    CreditCardDirectivesModule
  ]
})
export class BookingModule { }
