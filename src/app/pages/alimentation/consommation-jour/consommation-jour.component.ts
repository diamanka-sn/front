
import { Component, OnInit } from '@angular/core';
import { AlimentationService } from '../../../service/alimentation.service';
import { alimentationJour } from '../../../_models/Aliment';

@Component({
  selector: 'ngx-consommation-jour',
  templateUrl: './consommation-jour.component.html',
  styleUrls: ['./consommation-jour.component.scss']
})
export class ConsommationJourComponent implements OnInit {
  constructor(private al: AlimentationService) { }
  aliments: alimentationJour[] = []
  date:any;
  ngOnInit(): void {
    this.al.getAlimentationDuJour().subscribe((response) => {
      this.aliments = response;
      this.date = response[0].date
    })
  }
 
}
