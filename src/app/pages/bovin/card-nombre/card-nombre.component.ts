import { Component, OnDestroy, OnInit } from '@angular/core';

import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { BovinService } from '../../../service/bovin.service';

@Component({
  selector: 'ngx-card-nombre',
  templateUrl: './card-nombre.component.html',
  styleUrls: ['./card-nombre.component.scss']
})
export class CardNombreComponent implements OnInit, OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  nbreBovin: any;
 

  constructor(private theme: NbThemeService,
              private bs:BovinService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          label: 'Teareau',
          backgroundColor: colors.warning,
        }, {
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          label: 'Vache',
          backgroundColor: colors.primary,
        }, {
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          label: 'Genisse',
          backgroundColor: colors.success,
        },
        
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
  ngOnInit(): void {
    this.bs.getNombreBovin().subscribe(res => {
      this.nbreBovin = res;
    })
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
