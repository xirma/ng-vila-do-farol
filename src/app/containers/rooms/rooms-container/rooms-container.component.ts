import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-container',
  template: `
  <app-rooms></app-rooms>
  <app-buttom></app-buttom>
  `,
  styles: [
  ]
})
export class RoomsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
