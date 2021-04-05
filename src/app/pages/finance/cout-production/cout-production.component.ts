import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cout-production',
  templateUrl: './cout-production.component.html',
  styleUrls: ['./cout-production.component.scss']
})
export class CoutProductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }

}
