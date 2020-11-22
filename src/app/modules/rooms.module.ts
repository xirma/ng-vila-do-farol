import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from 'src/app/components/rooms/rooms/rooms.component';
import { RoomsContainerComponent } from 'src/app/containers/rooms/rooms-container/rooms-container.component';
import { ButtomComponent } from 'src/app/components/rooms/buttom/buttom.component';
import { RouterModule } from '@angular/router';
import { RoomsRoutingModule } from '../routes/rooms-routing.module';

import { RoomsDetailContainerComponent } from 'src/app/containers/rooms-detail/rooms-detail-container/rooms-detail-container.component';
import { DescriptionComponent } from 'src/app/components/rooms-detail/description/description.component';
import { SliderComponent } from 'src/app/components/rooms-detail/slider/slider.component';
import { Quarto2ContainerComponent } from 'src/app/containers/rooms-detail/quarto2-container/quarto2-container.component';
import { Quarto3ContainerComponent } from 'src/app/containers/rooms-detail/quarto3-container/quarto3-container.component';
import { QuartoAdpContainerComponent } from 'src/app/containers/rooms-detail/quarto-adp-container/quarto-adp-container.component';
import { Quarto1ContainerComponent } from 'src/app/containers/rooms-detail/quarto1-container/quarto1-container.component';




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
