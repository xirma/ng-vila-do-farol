import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from 'src/app/modules/home-module/components/slider/slider.component';
import { ButtonsComponent } from 'src/app/modules/home-module/components/buttons/buttons.component';
import { HomeContainerComponent } from 'src/app/modules/home-module/containers/home-container/home-container.component';
import { RouterModule } from '@angular/router';
import { MainService } from 'src/app/main.service';



@NgModule({
  declarations: [SliderComponent, ButtonsComponent, HomeContainerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ButtonsComponent, HomeContainerComponent, SliderComponent ]
})
export class HomeModule {

  constructor(
    private service: MainService
  ) {}

}
