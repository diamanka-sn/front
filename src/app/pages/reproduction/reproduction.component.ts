import { Component, OnInit } from '@angular/core';
import { ReproductionService } from '../../service/reproduction.service';

@Component({
  selector: 'ngx-reproduction',
  templateUrl: './reproduction.component.html',
  styleUrls: ['./argon.scss']
})
export class ReproductionComponent implements OnInit {
  nombreVeau: number;
  nombreVelle: number;
  nombreGenisse: number;
  constructor(private reprod: ReproductionService) { }

  ngOnInit(): void {
    this.reprod.getNombreVeau().subscribe(res => {
      this.nombreVeau = parseInt(res.toString())
    })

    this.reprod.getNombreVelle().subscribe(res => {
      this.nombreVelle = parseInt(res.toString())
    })

    this.reprod.getNombreGenisse().subscribe(res => {
      this.nombreGenisse = parseInt(res.toString())
    })
  }

}
