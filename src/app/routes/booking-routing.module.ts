import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BookingFormContainerComponent } from 'src/app/containers/booking/booking-form-container/booking-form-container.component';
import { PaymentFormContainerComponent } from 'src/app/containers/payment/payment-form-container.component';
import { BookingConfirmContainerComponent } from '../containers/booking/booking-confirm-container/booking-confirm-container.component';

const routes: Routes = [
  { path: '', component: BookingFormContainerComponent },
  { path: 'pagamento', component: PaymentFormContainerComponent },
  { path: 'confirmacao', component: BookingConfirmContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
