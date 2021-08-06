import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarto-adp-container',
  template: `
    <div class="flex-container space-around">
      <app-description [title]="title"></app-description>
      <app-slider [src]="src"></app-slider>
    </div>
  `,
  styles: []
})
export class QuartoAdpContainerComponent {

  title = 'Apartamento Adaptado';
  src = 'assets/Img/quarto-4.jpg';

  constructor() { }
}
