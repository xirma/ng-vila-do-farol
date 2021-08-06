import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-rooms-container',
  template: `
  <app-rooms></app-rooms>
  `,
  styles: [
  ]
})
export class RoomsContainerComponent implements OnInit {
  module = 'Acomodações';

  constructor(
    private service: MainService
    ) { }

  ngOnInit(): void {
    this.service.setCurrentModule(this.module);
  }
}
