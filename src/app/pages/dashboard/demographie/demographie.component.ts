import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-demographie',
  templateUrl: './demographie.component.html',
  styleUrls: ['./demographie.component.scss']
})
export class DemographieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
