import { Component, OnInit } from '@angular/core';
import { DepensesService } from '../../../../service/depenses.service';
import { FinanceService } from '../../../../service/finance.service';
import { ProductionService } from '../../../../service/production.service';

@Component({
  selector: 'ngx-charges-lait',
  templateUrl: './charges-lait.component.html',
  styleUrls: ['./charges-lait.component.scss']
})
export class ChargesLaitComponent implements OnInit {
  salaireLait: number;
  coutChauffage: number;
  coutEmballage: number;
  coutSterilisant:number;
  constructor(private fn: FinanceService,
     private dp: DepensesService) { }

  ngOnInit(): void {
    this.fn.getCoutSalaireLait().subscribe(res => {
      this.salaireLait = parseInt(res['2021'].map(res => res.montant.toString()))
    })

    this.dp.getcoutChauffage().subscribe(res => {
      this.coutChauffage = parseInt(res['2021'].map(res => res.montant.toString()))
    })

    this.dp.getcoutEmballage().subscribe(res => {
      this.coutEmballage = parseInt(res['2021'].map(res => res.montant.toString()))
    })

    this.dp.getcoutSterilisant().subscribe(res => {
      this.coutSterilisant = parseInt(res['2021'].map(res => res.montant.toString()))
    })

   
  }

}
