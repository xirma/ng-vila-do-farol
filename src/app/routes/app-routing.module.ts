import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from 'src/app/modules/home-module/containers/home-container/home-container.component';
import { RoomsContainerComponent } from 'src/app/modules/rooms-module/containers/rooms-container/rooms-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'acomodacoes', component: RoomsContainerComponent },
  { path: 'rooms-detail', loadChildren: () => import('src/app/modules/rooms-module/rooms.module').then(m => m.RoomsModule) },
  { path: 'reservas', loadChildren: () => import('src/app/modules/booking-module/booking.module').then(m => m.BookingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
