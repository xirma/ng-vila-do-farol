import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarto2-container',
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
export class Quarto2ContainerComponent implements OnInit {

  title = 'Apartamento 2 Quartos';
  src = 'assets/Img/quarto-2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
