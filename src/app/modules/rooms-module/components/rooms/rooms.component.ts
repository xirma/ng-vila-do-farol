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

  quartoUmRoute(): void {
    this.router.navigate(['/acomodacoes/quarto-1']);
  }

  quartoDoisRoute(): void {
    this.router.navigate(['/acomodacoes/quarto-2']);
  }

  quartoTresRoute(): void {
    this.router.navigate(['/acomodacoes/quarto-3']);
  }

  quartoAdpRoute(): void{
    this.router.navigate(['/acomodacoes/quarto-adp']);
  }

  reservasRoute(): void {
    this.router.navigate(['/reservas']);
  }
}
