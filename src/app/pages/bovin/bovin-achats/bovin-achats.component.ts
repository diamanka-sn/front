import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { BovinService } from '../../../service/bovin.service';
import { FinanceService } from '../../../service/finance.service';
@Component({
  selector: 'ngx-bovin-achats',
  templateUrl: './bovin-achats.component.html',
  styleUrls: ['./bovin-achats.component.scss']
})
export class BovinAchatsComponent implements AfterViewInit, OnDestroy, OnInit {
  options: any = {};
  themeSubscription: any;
  achetes: any;
  ach: string;
  cout: number;
  constructor(private theme: NbThemeService,
    private bv: BovinService,
    private fn: FinanceService) {
  }
  ngOnInit(): void {
    this.bv.getNombreBovinAchetes()
      .subscribe(res => {
        this.achetes = res
      })

    this.fn.getCoutBovin()
      .subscribe(res => {
       this.cout= res[0].prix
      
       
      })
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.bv.getNombreBovinAchetes()
        .subscribe(res => {
          const bovinAchetes = res

          this.bv.getNombreBovin()
            .subscribe(res => {
              const bovinTotal = res
              const bovinPlace = parseInt(bovinTotal.toString()) - parseInt(bovinAchetes.toString())
              this.options = {
                backgroundColor: echarts.bg,
                color: [colors.successLight, colors.primaryLight],
                tooltip: {
                  trigger: 'item',
                  formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                  orient: 'vertical',
                  left: 'left',
                  data: ['Achetes', 'Sur place'],
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
                series: [
                  {
                    name: 'Bovin',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '50%'],
                    data: [
                      { value: bovinAchetes, name: 'Achetes' },
                      { value: bovinPlace, name: 'Sur place' },
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
