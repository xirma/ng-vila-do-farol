import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsContainerComponent } from './containers/rooms-container/rooms-container.component';
import { Quarto1ContainerComponent } from './rooms-detail/Views/quarto1-container/quarto1-container.component';
import { Quarto2ContainerComponent } from './rooms-detail/Views/quarto2-container/quarto2-container.component';
import { Quarto3ContainerComponent } from './rooms-detail/Views/quarto3-container/quarto3-container.component';
import { QuartoAdpContainerComponent } from './rooms-detail/Views/quarto-adp-container/quarto-adp-container.component';



const routes: Routes = [
  {path: '', component: RoomsContainerComponent},
  {path: 'acomodacoes/quarto-1', component: Quarto1ContainerComponent},
  {path: 'acomodacoes/quarto-2', component: Quarto2ContainerComponent},
  {path: 'acomodacoes/quarto-3', component: Quarto3ContainerComponent},
  {path: 'acomodacoes/quarto-adp', component: QuartoAdpContainerComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
