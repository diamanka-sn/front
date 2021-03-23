import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AlimentationService } from '../../../service/alimentation.service';


@Component({
  selector: 'ngx-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService,
    private al: AlimentationService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.al.getStockAliment()
        .subscribe(res => {
          const labels = res['2021'].map(res => res.aliment);
          const data = res['2021'].map(res => ({
            value: res.stock,
            name: res.aliment
          }));
         
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
              data: labels,
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
                data: data,
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
        })
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  private random() {
    return Math.round(Math.random() * 1000);
  }
}
