import { Component, OnDestroy } from '@angular/core';

import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { FinanceService } from '../../../service/finance.service';

@Component({
  selector: 'ngx-chiffre-affaire',
  templateUrl: './chiffre-affaire.component.html',
  styleUrls: ['./chiffre-affaire.component.scss']
})
export class ChiffreAffaireComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private fn: FinanceService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.fn.getChiffreBovin().subscribe(res => {
        const b = res['2021'].map(res => res.chiffre)

        this.fn.getChiffreLait().subscribe(res => {
          const l = res['2021'].map(res => res.chiffre)

          this.data = {
            labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              data: l,
              label: 'CA lait',
              backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
              borderColor: colors.primary,
            }, {
              data: b,
              label: 'CA bovin',
              backgroundColor: NbColorHelper.hexToRgbA(colors.success, 0.3),
              borderColor: colors.success,
            }
            ],
          };
        })
      })

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
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
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
