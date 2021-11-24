import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() id: string = "";
  @Input() textAlign: string = "";
  @Input() name: string = "";
  @Input() desc: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
