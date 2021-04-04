import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../../../service/finance.service';
import { factureLait } from '../../../../_models/Factures';

@Component({
  selector: 'ngx-lait',
  templateUrl: './lait.component.html',
  styleUrls: ['./lait.component.scss']
})
export class LaitComponent implements OnInit {
  factureLaits: factureLait[] = []
  constructor(private fn: FinanceService) { }

  ngOnInit(): void {
    this.fn.getFactureLait().subscribe(res => {
      this.factureLaits = res
    })
  }

}
