import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-graphe-production',
  templateUrl: './graphe-production.component.html',
  styleUrls: ['./graphe-production.component.scss']
})
export class GrapheProductionComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Jan', 'Fev', 'Mars', 'Av', 'Mai', 'Juin', 'Juil','Aout','Sept','Oct','Nov','Dec'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40,40, 19, 86, 27, 90],
          label: 'Lait',
          backgroundColor: NbColorHelper.hexToRgbA(colors.successLight, 0.8),
        }]
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
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
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
