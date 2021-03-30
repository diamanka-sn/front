import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DepensesService } from '../../../service/depenses.service';
import { listeDepense } from '../../../_models/Depense';
@Component({
  selector: 'ngx-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.scss']
})
export class DepensesComponent implements OnInit {
  
  depense: listeDepense [] = []
  p: number = 1;
  constructor(private dp : DepensesService) { }
 
  ngOnInit(): void {
    this.dp.getAlldepense().subscribe((response) => {
      this.depense = response;
    })
  }
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

}
