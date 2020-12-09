import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  name = 'Felipe Pacheco Schürmann';
  email = 'felipe_pschurmann@hotmail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
