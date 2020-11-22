import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from 'src/app/containers/home/home-container/home-container.component';
import { RoomsContainerComponent } from 'src/app/containers/rooms/rooms-container/rooms-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'acomodacoes', component: RoomsContainerComponent },
  { path: 'rooms-detail', loadChildren: () => import('src/app/modules/rooms.module').then(m => m.RoomsModule) },
  { path: 'reservas', loadChildren: () => import('src/app/modules/booking.module').then(m => m.BookingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
