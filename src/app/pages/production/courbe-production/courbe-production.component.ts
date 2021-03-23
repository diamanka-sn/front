import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { ProductionService } from '../../../service/production.service';

@Component({
  selector: 'ngx-courbe-production',
  templateUrl: './courbe-production.component.html',
  styleUrls: ['./courbe-production.component.scss']
})
export class CourbeProductionComponent  implements OnDestroy,OnInit {

  data: any;
  options: any;
  themeSubscription: any;
  quantite : any;

  constructor(private theme: NbThemeService, private pd:ProductionService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.pd.getProductionLait().subscribe(res => {
        const matin = res['2021'].map(res => res.matin);
        const total = res['2021'].map(res => res.total);
        const soir  = res['2021'].map(res => res.soir);
        
      this.data = {
        labels: ['Jan', 'Fev', 'Mars', 'Av', 'Mai', 'Juin', 'Juil','Aout','Sept','Oct','Nov','Dec'],
        datasets: [{
          data: matin,
          label: 'Trait Matin',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight,0.9),
        },
        {
          data: soir,
          label: 'Trait Soir',
          backgroundColor: NbColorHelper.hexToRgbA(colors.successLight,0.9),
        },]
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
    })
    });
  }
  ngOnInit(): void {
  
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  
  
}
