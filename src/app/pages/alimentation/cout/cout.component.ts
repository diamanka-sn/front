import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AlimentationService } from '../../../service/alimentation.service';
import { FinanceService } from '../../../service/finance.service';

@Component({
  selector: 'ngx-cout',
  templateUrl: './cout.component.html',
  styleUrls: ['./cout.component.scss']
})
export class CoutComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  g: string = '2021'
  constructor(private theme: NbThemeService,
    private fn: FinanceService, private al: AlimentationService) {
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
                { value: cout, name: 'Depenses alimentation' },
                { value: autreDepense, name: 'Autres depenses' },
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
      })
    })
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
