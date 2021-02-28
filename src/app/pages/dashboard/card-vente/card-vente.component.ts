import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-card-vente',
  templateUrl: './card-vente.component.html',
  styleUrls: ['./card-vente.component.scss']
})
export class CardVenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }

}
