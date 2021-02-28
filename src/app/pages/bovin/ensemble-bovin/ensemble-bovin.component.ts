import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
 
@Component({
  selector: 'ngx-ensemble-bovin',
  templateUrl: './ensemble-bovin.component.html',
  styleUrls: ['./ensemble-bovin.component.scss']
})
export class EnsembleBovinComponent  implements AfterViewInit, OnDestroy {
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
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Vache', 'Taureau', 'Veau', 'Velle', 'Genisse'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Bovin',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [
              { value: this.random(), name: 'Vache' },
              { value: this.random(), name: 'Taureau' },
              { value: this.random(), name: 'Veau' },
              { value: this.random(), name: 'Velle' },
              { value: this.random(), name: 'Genisse' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
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
  private random() {
    return Math.round(Math.random() * 1000);
  }

}
