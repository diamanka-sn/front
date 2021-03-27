import { Component, OnInit } from '@angular/core';
import { ProductionService } from '../../../service/production.service';

@Component({
  selector: 'ngx-stock-lait',
  templateUrl: './stock-lait.component.html',
  styleUrls: ['./stock-lait.component.scss']
})
export class StockLaitComponent implements OnInit {
  stock: any;
  constructor(private prod: ProductionService) { }

  ngOnInit(): void {
    this.prod.getStockDisponible().subscribe(res => {
        this.stock = res
    });
  }

}
