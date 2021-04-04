import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.scss']
})
export class FacturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }

}
