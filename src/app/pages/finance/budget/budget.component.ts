import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'ngx-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.warning],
        tooltip: {},
        legend: {
          data: ['Budget alloué', 'Depense réelle'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        radar: {
          name: {
            textStyle: {
              color: echarts.textColor,
            },
          },
          indicator: [
           
            { name: 'Alimentaton', max: 1600000 },
            { name: 'Santé', max: 3000000 },
            { name: 'Production', max: 3800000 },
            { name: 'Personnelles', max: 5200000 },
            { name: 'Maintenance', max: 5200000 },
            
          ],
          splitArea: {
            areaStyle: {
              color: 'transparent',
            },
          },
        },
        series: [
          {
            name: 'Budget vs Depense',
            type: 'radar',
            data: [
              {
                value: [1000000, 2800000, 2000000, 5000000,5000000],
                name: 'Budget alloué',
              },
              {
                value: [1400000, 2800000, 3100000, 4200000,4200000],
                name: 'Depense réelle',
              },
            ],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
 
}
