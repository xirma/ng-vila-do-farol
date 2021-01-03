import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  template: `
  <div class="container" >
    <app-slider slides="slides"></app-slider>
    <app-buttons></app-buttons>
  </div>
  `,
  styles: [
  ]
})
export class HomeContainerComponent {

  constructor() { }
}
