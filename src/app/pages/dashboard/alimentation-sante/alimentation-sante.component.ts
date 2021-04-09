import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-alimentation-sante',
  templateUrl: './alimentation-sante.component.html',
  styleUrls: ['./alimentation-sante.component.scss']
})
export class AlimentationSanteComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
