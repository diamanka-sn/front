import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';


@Component({
  selector: 'ngx-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements AfterViewInit, OnDestroy {
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
          formatter: '{a} <br/>{b} : {c} Kg ({d}%)',
        },
        legend: {
          orient: 'horizontal',
          left: 'left',
          data: ['Sorgo','Sorgos', 'Mais','Cereale','Aliment vache laitiere'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Aliment',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [
              { value: this.random(), name: 'Sorgo' },
              { value: this.random(), name: 'Sorgos' },
              { value: this.random(), name: 'Mais' },
              { value: this.random(), name: 'Cereale' },
              { value: this.random(), name: 'Aliment vache laitiere' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor/*'rgb(0,0,0,0.5)'*/,
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
