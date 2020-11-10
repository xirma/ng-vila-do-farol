import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarto1-container',
  template: `
  <div class="flex-container space-around">
    <app-description [title]="title"></app-description>
    <app-slider [src]="src"></app-slider>
  </div>
  `,
  styles: [`
  div {
    display: flex;
    height: 446px;
}
  `]
})
export class Quarto1ContainerComponent implements OnInit {

  title = 'Apartamento 1 Quarto';
  src = 'assets/Img/quarto-1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}