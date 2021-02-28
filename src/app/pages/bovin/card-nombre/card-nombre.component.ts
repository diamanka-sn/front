import { Component, OnDestroy } from '@angular/core';

import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-card-nombre',
  templateUrl: './card-nombre.component.html',
  styleUrls: ['./card-nombre.component.scss']
})
export class CardNombreComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil','Aout','Sept','Oct','Nov','Dec'],
        datasets: [{
          data:  [this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
          label: 'Teareau',
          backgroundColor: colors.warning,
        },{
          data:  [this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
          label: 'Vache',
          backgroundColor: colors.primary,
        },{
          data:  [this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
          label: 'Genisse',
          backgroundColor: colors.success,
        }
        ],
      };
      

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
  private random() {
    return Math.round(Math.random() * 1000);
  }
}
