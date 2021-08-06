import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  firstRoute(): void {
    this.router.navigate(['/acomodacoes']);
  }

  secondRoute(): void {
    this.router.navigate(['/reservas']);
  }

}
