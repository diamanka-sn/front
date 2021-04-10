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
    private bs: BovinService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.bs.getEvolutionFerme().subscribe(res => {
        const dataVache = res['2021'].map(res => res.nombre)
        console.log(dataVache)
                this.data = {
                  labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec'],
                  datasets: [{
                    data: dataVache,
                    label: 'Vache',
                    backgroundColor: colors.primary,
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
              })
            })
         
  }
  ngOnInit(): void {
    this.bs.getNombreBovinSansVendu().subscribe(res => {
      this.nbreBovin = parseInt(res.toString());
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
