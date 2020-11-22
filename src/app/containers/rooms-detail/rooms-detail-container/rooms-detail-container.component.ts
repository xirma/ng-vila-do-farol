import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-detail-container',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class RoomsDetailContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
