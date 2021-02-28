import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})
export class DepensesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

}
