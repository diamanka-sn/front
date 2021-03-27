import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'ngx-consommation',
  templateUrl: './consommation.component.html',
  styleUrls: ['./consommation.component.scss']
})
export class ConsommationComponent implements OnDestroy {
  data: {};
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin','Juil','Aout','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Mais',
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          borderColor: colors.info,
          backgroundColor: colors.info,
          fill: false,
          pointRadius: 3,
          pointHoverRadius: 10,
        }, {
          label: 'Sorgo',
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          borderColor: colors.warning,
          backgroundColor: colors.warning,
          fill: false,
          pointRadius: 3,
          pointHoverRadius: 10,
        },
      ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        hover: {
          mode: 'index',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                
              },
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
              display: true,
              scaleLabel: {
                display: true,
               
              },
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

  private random() {
    return Math.round(Math.random() * 1000);
  }

}
