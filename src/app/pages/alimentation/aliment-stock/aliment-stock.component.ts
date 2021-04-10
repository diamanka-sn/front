import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-aliment-stock',
  templateUrl: './aliment-stock.component.html',
  styleUrls: ['./aliment-stock.component.scss']
})
export class AlimentStockComponent implements OnInit {
  
  ngOnInit(): void {
    
  }
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
 
}
