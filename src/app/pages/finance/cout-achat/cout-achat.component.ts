import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cout-achat',
  templateUrl: './cout-achat.component.html',
  styleUrls: ['./cout-achat.component.scss']
})
export class CoutAchatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }

}
