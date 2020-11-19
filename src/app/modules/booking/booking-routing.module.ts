import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './Container/booking.component';
import { BookingFormContainerComponent } from './views/booking/container/booking-form-container.component';
import { PaymentFormContainerComponent } from './views/payment/container/payment-form-container.component';

const routes: Routes = [
  { path: '', component: BookingFormContainerComponent },
  { path: 'pagamento', component: PaymentFormContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
