import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  static slides = [
    {src : 'assets/Img/vila-do-farol-25.jpg'},
    {src : 'assets/Img/vila-do-farol-29.jpg'},
    {src : 'assets/Img/vila-do-farol-63.jpg'}
  ];

  constructor() { }
}
