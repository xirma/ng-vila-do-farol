import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input()
  src: string;


  constructor() {

   }

  ngOnInit(): void {
  }

}
