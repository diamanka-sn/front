import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bovin-achat',
  templateUrl: './bovin-achat.component.html',
  styleUrls: ['./bovin-achat.component.scss']
})
export class BovinAchatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }

}
