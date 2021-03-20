import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { BovinService } from '../../../service/bovin.service';

@Component({
  selector: 'ngx-card-pie',
  template: `
  <chart type="doughnut" [data]="data" [options]="options"></chart>
  `,
})
export class CardPie implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,
    private bs: BovinService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.bs.getSanteBovin()
        .subscribe(res => {
          const labels = res.map(res => res.sante);
          const data = res.map(res => res.nombre);
          this.data = {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: [colors.dangerLight, colors.primaryLight, colors.successLight],
            }],
          };

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
        })
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
