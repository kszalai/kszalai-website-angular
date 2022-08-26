import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuOpen: boolean = false;
  classMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMenuOpen(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleClassMenu(): void {
    this.classMenuOpen = !this.classMenuOpen;
  }

}
