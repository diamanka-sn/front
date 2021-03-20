import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { RaceService } from '../../../service/race.service';

@Component({
  selector: 'ngx-card-aliment',
  template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
})
export class CardAliment implements OnDestroy,OnInit {
  data: any;
  options: any;
  themeSubscription: any;
  existant:any;
  xlabel : any = []
  constructor(private theme: NbThemeService) {
    
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: [this.xlabel],
        datasets: [{
          data: [300, 100],
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
  }
  ngOnInit(): void {
    
  }
 
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  
  
}
