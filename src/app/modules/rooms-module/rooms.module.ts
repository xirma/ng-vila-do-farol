import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from 'src/app/modules/rooms-module/components/rooms/rooms.component';
import { RoomsContainerComponent } from 'src/app/modules/rooms-module/containers/rooms-container/rooms-container.component';
import { RouterModule } from '@angular/router';
import { RoomsRoutingModule } from '../../routes/rooms-routing.module';

import { RoomsDetailContainerComponent } from 'src/app/modules/rooms-module/containers/rooms-detail-container/rooms-detail-container.component';
import { DescriptionComponent } from 'src/app/modules/rooms-module/components/rooms-detail/description/description.component';
import { SliderComponent } from 'src/app/modules/rooms-module/components/rooms-detail/slider/slider.component';
import { Quarto2ContainerComponent } from 'src/app/modules/rooms-module/containers/quarto2-container/quarto2-container.component';
import { Quarto3ContainerComponent } from 'src/app/modules/rooms-module/containers/quarto3-container/quarto3-container.component';
import { QuartoAdpContainerComponent } from 'src/app/modules/rooms-module/containers/quarto-adp-container/quarto-adp-container.component';
import { Quarto1ContainerComponent } from 'src/app/modules/rooms-module/containers/quarto1-container/quarto1-container.component';




@NgModule({
  declarations: [
    RoomsComponent,
    RoomsContainerComponent,
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
  exports: [RoomsComponent, RoomsContainerComponent]
})
export class RoomsModule { }
