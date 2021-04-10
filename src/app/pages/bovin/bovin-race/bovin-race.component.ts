import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bovin-race',
  templateUrl: './bovin-race.component.html',
  styleUrls: ['./bovin-race.component.scss']
})
export class BovinRaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }

}
