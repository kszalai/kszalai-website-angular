import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'WorkHistory',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {

  @Input() position: string = "";
  @Input() company: string = "";
  @Input() location: string = "";
  @Input() startTime: string = "";
  @Input() endTime: string = "Present";

  constructor() { }

  ngOnInit(): void {
  }

}
