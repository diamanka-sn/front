import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-periode-phase',
  templateUrl: './periode-phase.component.html',
  styleUrls: ['./periode-phase.component.scss']
})
export class PeriodePhaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}

