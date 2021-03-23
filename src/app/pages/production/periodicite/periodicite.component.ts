import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { ProductionService } from '../../../service/production.service';

@Component({
  selector: 'ngx-periodicite',
  templateUrl: './periodicite.component.html',
  styleUrls: ['./periodicite.component.scss']
})
export class PeriodiciteComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;


  constructor(private theme: NbThemeService,private prod:ProductionService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
    this.prod.getPhaseVache().subscribe(res => {
      const lactation= res['lactation'].map(res  => res.nombre)
      const tarissement = res['tarissement'].map(res  => res.nombre)
    

      this.data = {
        labels: ['Jan', 'Fev', 'Mars', 'Av', 'Mai', 'Juin', 'Juil','Aout','Sept','Oct','Nov','Dec'],
        datasets: [{
          data: lactation,
          label: 'Lactation',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight,0.9),
        }, {
          data: tarissement,
          label: 'Tarissement',
          backgroundColor: NbColorHelper.hexToRgbA(colors.warningLight, 0.9),
        }]
      };
    })
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
