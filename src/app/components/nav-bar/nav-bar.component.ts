import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{

  currentModule: string;

  constructor(
    private service: MainService
  ) { }

  ngOnInit(): void {
    this.service.sharedCurrentModule.subscribe(currentModule => this.currentModule = currentModule);
  }
}
