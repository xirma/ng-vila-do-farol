import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomsContainerComponent } from './containers/rooms-container/rooms-container.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { RouterModule } from '@angular/router';
import { RoomsRoutingModule } from './rooms-routing.module';

import { RoomsDetailContainerComponent } from './rooms-detail/containers/rooms-detail-container/rooms-detail-container.component';
import { DescriptionComponent } from './rooms-detail/views/components/description/description.component';
import { SliderComponent } from './rooms-detail/views/components/slider/slider.component';
import { Quarto2ContainerComponent } from './rooms-detail/Views/quarto2-container/quarto2-container.component';
import { Quarto3ContainerComponent } from './rooms-detail/Views/quarto3-container/quarto3-container.component';
import { QuartoAdpContainerComponent } from './rooms-detail/Views/quarto-adp-container/quarto-adp-container.component';
import { Quarto1ContainerComponent } from './rooms-detail/Views/quarto1-container/quarto1-container.component';




@NgModule({
  declarations: [
    RoomsComponent,
    RoomsContainerComponent,
    ButtomComponent,
    RoomsDetailContainerComponent,
    Quarto1ContainerComponent,
    DescriptionComponent,
    SliderComponent,
    Quarto2ContainerComponent,
    Quarto3ContainerComponent,
    QuartoAdpContainerComponent,
    Quarto1ContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    RoomsRoutingModule
  ],
  exports: [RoomsComponent, RoomsContainerComponent, ButtomComponent]
})
export class RoomsModule { }
