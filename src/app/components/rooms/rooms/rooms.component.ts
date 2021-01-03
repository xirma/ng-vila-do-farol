import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  constructor(
    private router: Router
  ) { }

  firstRoute(): void {
    this.router.navigate(['/acomodacoes/quarto-1']);
  }

  secondRoute(): void {
    this.router.navigate(['/acomodacoes/quarto-2']);
  }

  thirdRoute(): void {
    this.router.navigate(['/acomodacoes/quarto-3']);
  }

  fourthRoute(): void{
    this.router.navigate(['/acomodacoes/quarto-adp']);
  }

  fithRoute(): void {
    this.router.navigate(['/reservas']);
  }
}
