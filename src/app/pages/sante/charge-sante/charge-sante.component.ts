import { Component, OnInit } from '@angular/core';
import { MaladieService } from '../../../service/maladie.service';
import { depenseSante } from '../../../_models/Maladie';

@Component({
  selector: 'ngx-charge-sante',
  templateUrl: './charge-sante.component.html',
  styleUrls: ['./charge-sante.component.scss']
})
export class ChargeSanteComponent implements OnInit {
  p: number = 1;

depenseSante : depenseSante [] = []
cout:number;
  constructor(private ml:MaladieService) { }

  ngOnInit(): void {
    this.ml.getChargeSante().subscribe((response) => {
      this.depenseSante = response['2021'];
      
    })
    this.ml.getCoutSante().subscribe((response) => {
      this.cout = parseInt(response['2021'].map(response => response.sante.toString())) 
    })
  }

}
