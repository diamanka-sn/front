import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-cout-periodicite',
  templateUrl: './cout-periodicite.component.html',
  styleUrls: ['./cout-periodicite.component.scss']
})
export class CoutPeriodiciteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }

}
