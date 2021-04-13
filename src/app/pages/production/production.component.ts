import { Component, OnInit } from '@angular/core';
import { ProductionService } from '../../service/production.service';

@Component({
  selector: 'ngx-production',
  templateUrl: './production.component.html',
  styleUrls: ['./argon.scss']
})
export class ProductionComponent implements OnInit {
  stock: number;
  production: number;
  moisCourant:number;
  moisPasse:number;
  pourcentageProduction:number;
  constructor(private prod: ProductionService) { }

  ngOnInit(): void {
    this.prod.getStockDisponible().subscribe(res => {
      this.stock = parseInt(res['2021'].map(res => res.stock.toString()))

    })
    this.prod.getProductionTotale().subscribe(res => {
      this.production = parseInt(res['2021'].map(res => res.total.toString()))      
    })
    this.prod.getProductionDuMois().subscribe(res => {
      this.moisCourant = parseInt(res['2021'].map(res => res.total.toString()))  
      this.prod.getProductionMoisPasse().subscribe(res => {
      this.moisPasse = parseInt(res['2021'].map(res => res.total.toString()))   
      
      this.pourcentageProduction = ((this.moisCourant - this.moisPasse)/this.moisCourant)* 100
    })
  })

  }
}
