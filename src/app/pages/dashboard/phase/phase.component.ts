import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { VacheService } from '../../../service/vache.service';

@Component({
  selector: 'ngx-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,private vc: VacheService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.vc.getPeriodeVache()
      .subscribe(res => {
        const labels = res.map(res => res.periode);
        const data = res.map(res => res.nombre);
      this.data = {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [colors.dangerLight, colors.successLight],
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
