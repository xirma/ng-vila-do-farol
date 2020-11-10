import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './Container/booking.component';
import { BookingFormContainerComponent } from './views/booking-form/container/booking-form-container.component';

const routes: Routes = [
  { path: '', component: BookingFormContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
