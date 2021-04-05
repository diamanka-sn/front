import { Component, OnInit } from '@angular/core';
import { AlimentationService } from '../../../../service/alimentation.service';
import { DepensesService } from '../../../../service/depenses.service';
import { FinanceService } from '../../../../service/finance.service';
import { MaladieService } from '../../../../service/maladie.service';

@Component({
  selector: 'ngx-charges-bovin',
  templateUrl: './charges-bovin.component.html',
  styleUrls: ['./charges-bovin.component.scss']
})
export class ChargesBovinComponent implements OnInit {
  eau: number;
  electricite: number;
  sante: number;
  prixAchats: number;
  transportAliment: number;
  coutTransport: number;
  coutBovin:any;
  salaire:number;
  constructor(private dp: DepensesService,
    private ml: MaladieService,
    private al: AlimentationService,
    private fn: FinanceService) { }

  ngOnInit(): void {
    this.dp.getFactureEau().subscribe(res => {
      this.eau = parseInt(res['2021'].map(res => res.montant.toString()))
    })

    this.dp.getFactureElectricite().subscribe(res => {
      this.electricite = parseInt(res['2021'].map(res => res.montant.toString()))
    })

    this.ml.getCoutSante().subscribe(res => {
      this.sante = parseInt(res['2021'].map(res => res.sante.toString()))
    })

    this.al.getChargeAlimentation().subscribe(res => {
      this.prixAchats = parseInt(res['2021'].map(res => res.achetes.toString()));
    })
    this.al.getCoutTransportAlimentation().subscribe(res => {

      this.transportAliment = parseInt(res['2021'].map(res => res.montant.toString()));

    })

    this.fn.getCotTransport().subscribe(res => {
      this.coutTransport = parseInt(res['2021'].map(res => res.montant.toString()))
    })
    this.fn.getCoutsBovin().subscribe(res => {
      this.coutBovin = res;
    })
    this.fn.getCoutSalaireBovin().subscribe(res => {
      this.salaire = parseInt(res['2021'].map(res => res.montant.toString()))
    })

  }

}
