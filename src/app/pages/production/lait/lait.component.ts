import { Component, OnInit } from '@angular/core';
import { ProductionService } from '../../../service/production.service';

@Component({
  selector: 'ngx-lait',
  templateUrl: './lait.component.html',
  styleUrls: ['./lait.component.scss']
})
export class LaitComponent implements OnInit {
quantite : any;
  constructor( private pd:ProductionService) { }

  ngOnInit(): void {
    this.pd.getQuantiteProduite().subscribe(res => {
     this.quantite= res.map(res  => res.total)
    
    })
  }

}
