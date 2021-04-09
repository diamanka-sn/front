import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-commande-ca',
  templateUrl: './commande-ca.component.html',
  styleUrls: ['./commande-ca.component.scss']
})
export class CommandeCaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
