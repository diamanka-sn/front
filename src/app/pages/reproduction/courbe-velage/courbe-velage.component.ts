import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-courbe-velage',
  templateUrl: './courbe-velage.component.html',
  styleUrls: ['./courbe-velage.component.scss']
})
export class CourbeVelageComponent  implements OnDestroy {

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
          data: [this.random(), this.random(),this.random(), this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(),this.random(), this.random()],
          label: 'Velage',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight,0.9),
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
  private random() {
    return Math.round(Math.random() * 500);
  }
}
