import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

import { FinanceService } from '../../../service/finance.service';
import { chiffreAnnuelle } from '../../../_models/Finance';

@Component({
  selector: 'ngx-card-chiffre',
  templateUrl: './card-chiffre.component.html',
  styleUrls: ['./card-chiffre.component.scss']
})
export class CardChiffreComponent implements OnDestroy, OnInit {

  chiffre: chiffreAnnuelle[] = [];

  themeSubscription: any;
  chiffrel: number;
  chiffreb: number;

  partBovin: any;
  partLait: any;
  ca: any;
  data: any;
  options: any;

  constructor(private theme: NbThemeService, private fin: FinanceService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.fin.getChiffreAnnuelleBovin().subscribe(res => {
        const b = res.map(res => res.chiffreb);

        this.fin.getChiffreAnnuelleLait().subscribe(res => {
          const l = res.map(res => res.chiffrel);

          this.chiffrel = parseInt(l[0]);
          this.chiffreb = parseInt(b[0]);

          this.data = {
            labels: ['Lait', 'Bovin'],
            datasets: [{
              data: [this.chiffrel, this.chiffreb],
              backgroundColor: [colors.primaryLight, colors.successLight],
            }],
          };
        })
      })

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnInit(): void {
    this.fin.getChiffreAnnuelleBovin().subscribe(res => {
      const b = res.map(res => res.chiffreb);

      this.fin.getChiffreAnnuelleLait().subscribe(res => {
        const l = res.map(res => res.chiffrel);

        this.chiffrel = parseInt(l[0]);
        this.chiffreb = parseInt(b[0]);

        this.ca = this.chiffreb + this.chiffrel;

      })
    })
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }


}




