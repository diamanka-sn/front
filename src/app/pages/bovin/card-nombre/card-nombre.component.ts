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
      this.bs.getVacheMois().subscribe(res => {
        const dataVache = res['2021'].map(res => res.nombre)

        this.bs.getTaureauMois().subscribe(res => {
          const dataTaureau = res['2021'].map(res => res.nombre)

          this.bs.getVeauMois().subscribe(res => {
            const dataVeau = res['2021'].map(res => res.nombre)

            this.bs.getVelleMois().subscribe(res => {
              const dataVelle = res['2021'].map(res => res.nombre)
              this.bs.getGenisseMois().subscribe(res => {
                const dataGenisse = res['2021'].map(res => res.nombre)
                this.data = {
                  labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec'],
                  datasets: [{
                    data: dataTaureau,
                    label: 'Taureau',
                    backgroundColor: colors.warning,
                  }, {
                    data: dataVache,
                    label: 'Vache',
                    backgroundColor: colors.primary,
                  }, {
                    data: dataGenisse,
                    label: 'Genisse',
                    backgroundColor: colors.success,
                  },
                  {
                    data: dataVeau,
                    label: 'Veau',
                    backgroundColor: colors.info,
                  }, {
                    data: dataVelle,
                    label: 'Velle',
                    backgroundColor: colors.danger,
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
          })
        })
      })
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
