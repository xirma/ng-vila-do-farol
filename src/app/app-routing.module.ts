import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './modules/home/containers/home-container/home-container.component';
import { RoomsContainerComponent } from './modules/rooms/containers/rooms-container/rooms-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'acomodacoes', component: RoomsContainerComponent },
  { path: 'rooms-detail', loadChildren: () => import('./modules/rooms/rooms.module').then(m => m.RoomsModule) },
  { path: 'reservas', loadChildren: () => import('./modules/booking/booking.module').then(m => m.BookingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
