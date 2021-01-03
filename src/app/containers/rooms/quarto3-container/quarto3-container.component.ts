import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarto3-container',
  template: `
  <div class="flex-container space-around">
      <app-description [title]="title"></app-description>
      <app-slider [src]="src"></app-slider>
    </div>
  `,
  styles: []
})
export class Quarto3ContainerComponent {

  title = 'Apartamento 3 Quartos';
  src = 'assets/Img/quarto-3.jpg';

  constructor() { }
}
