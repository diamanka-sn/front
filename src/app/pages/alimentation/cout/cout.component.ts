import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-cout',
  templateUrl: './cout.component.html',
  styleUrls: ['./cout.component.scss']
})
export class CoutComponent implements AfterViewInit, OnDestroy {
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
            data: ['Depenses alimentation', 'Autres depenses'],
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
                { value: this.random(), name: 'Depenses alimentation' },
                { value: this.random(), name: 'Autres depenses' },
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
  
    private random() {
      return Math.round(Math.random() * 1000);
    } 
}
