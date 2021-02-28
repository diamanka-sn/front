import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-charges-production',
  templateUrl: './charges-production.component.html',
  styleUrls: ['./charges-production.component.scss']
})
export class ChargesProductionComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        //color: [colors.warningLight, colors.infoLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}Fcfa ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Frais Production', 'Autres Frais'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Depenses',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [
              { value: 39000, name: 'Frais Production' },
              { value: 145000, name: 'Autres Frais' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: /*echarts.itemHoverShadowColor*/'rgb(0,0,1,0.5)',
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
           /* labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },*/
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
