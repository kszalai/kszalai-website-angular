import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number;
  lastModified: string;

  constructor() {
    this.lastModified = document.lastModified;
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
