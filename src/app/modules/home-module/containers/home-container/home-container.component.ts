import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

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
export class HomeContainerComponent implements OnInit {

  module = 'Home';

  constructor(
    private service: MainService
  ) { }

  ngOnInit(): void {
    this.service.setCurrentModule(this.module);
  }
}
