import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AlimentationService } from '../../../service/alimentation.service';
import { RaceService } from '../../../service/race.service';
import { stock, type } from '../../../_models/Aliment';

@Component({
  selector: 'ngx-card-aliment',
  template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
})
export class CardAliment implements OnDestroy, OnInit {
  data: any;
  options: any;
  option: any;
  themeSubscription: any;
  existant: any;
  xlabel: any = []
  achetes: any;
  stock: any;
  consommees: any;
  types: type[] = []
  stoks: stock[] = []
  constructor(private theme: NbThemeService,
    private al: AlimentationService
  ) {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.al.getQuantiteConsommees().subscribe(res => {
        this.consommees = res.map(res => res.consommees)

        this.al.getQuantiteStock().subscribe(res => {
          this.achetes = res.map(res => res.achetes)
          this.stock = this.achetes - this.consommees;

          console.log(this.stock)
          this.data = {
            labels: ['Consommées', 'Stock'],
            datasets: [{
              data: [this.consommees, this.stock],
              backgroundColor: [colors.primaryLight, colors.successLight],
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
        });
      });
    });
  }
  ngOnInit(): void {
    this.al.getTypeAliment().subscribe((res) => {
      const option = res.map(res => ({
        value: res.type,
        name: res.type
      }));
    })



    // this.al.getQuantiteConsommees().subscribe(res=>{
    //   this.consommees = res
    // })

  }


  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  typeAliment() {

  }
}
