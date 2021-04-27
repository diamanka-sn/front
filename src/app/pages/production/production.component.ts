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
  moisCourant: number;
  moisPasse: number;
  stockMoisCourant: number;
  StockMoisPasse: number;
  PourcentageStock: number;
  pourcentageProduction: number;

  //vente Lait 
  quantiteLaitVendu: number;
  venteMoisPasse: number;
  venteMoisCourant: number;
  pourcentageVenteLait: number;
  constructor(private prod: ProductionService) { }

  ngOnInit(): void {
    this.prod.getStockDisponible().subscribe(res => {
      this.stock = parseInt(res['2021'].map(res => res.stock.toString()))

    })

    this.prod.getStockMoisCourant().subscribe(res => {
      this.stockMoisCourant = parseInt(res['2021'].map(res => res.stock.toString()))

      this.prod.getStockMoisPasse().subscribe(res => {
        this.StockMoisPasse = parseInt(res['2021'].map(res => res.stock.toString()))

        this.PourcentageStock = ((this.stockMoisCourant - this.StockMoisPasse) / this.stockMoisCourant) * 100

      })
    })
    this.prod.getProductionTotale().subscribe(res => {
      this.production = parseInt(res['2021'].map(res => res.total.toString()))
    })
    this.prod.getProductionDuMois().subscribe(res => {
      this.moisCourant = parseInt(res['2021'].map(res => res.total.toString()))
      this.prod.getProductionMoisPasse().subscribe(res => {
        this.moisPasse = parseInt(res['2021'].map(res => res.total.toString()))

        this.pourcentageProduction = ((this.moisCourant - this.moisPasse) / this.moisCourant) * 100
      })
    })

    this.prod.getVenteLaitTotal().subscribe(res => {
      this.quantiteLaitVendu = parseInt(res['2021'].map(res => res.quantite.toString()))
    })

    this.prod.getVenteMoisCourant().subscribe(res => {
      this.venteMoisCourant = parseInt(res['2021'].map(res => res.quantite.toString()))
      this.prod.getVenteMoisPasse().subscribe(res => {
        this.venteMoisPasse = parseInt(res['2021'].map(res => res.quantite.toString()))
        this.pourcentageVenteLait = ((this.venteMoisCourant - this.venteMoisPasse) / this.venteMoisCourant) * 100
      })
    })
  }
}
