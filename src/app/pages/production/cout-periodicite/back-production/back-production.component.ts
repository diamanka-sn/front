import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AlimentationService } from '../../../../service/alimentation.service';
import { FinanceService } from '../../../../service/finance.service';

@Component({
  selector: 'ngx-back-production',
  templateUrl: './back-production.component.html',
  styleUrls: ['./back-production.component.scss']
})
export class BackProductionComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  g:string='2021';
  constructor(private theme: NbThemeService, private fn: FinanceService, private al: AlimentationService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.al.getChargeAlimentation().subscribe(res => {

        const coutAlimentation = res[this.g].map(res => res.achetes)
        
        const cout = parseInt(coutAlimentation[0].toString())
        

        this.fn.getChargeAutreDepense().subscribe(res => {

          const depense = res[this.g].map(res => res.achetes)

          const coutDepense = parseInt(depense[0].toString())

          
        this.fn.getCoutBovin().subscribe(res => {

          const coutBovin =parseInt(res[0].prix.toString())
          
          const autreDepense = coutBovin + coutDepense
         
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
    });
    });
  });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
