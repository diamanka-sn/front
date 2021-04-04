import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { BovinService } from '../../../service/bovin.service';
import { VacheService } from '../../../service/vache.service';

@Component({
  selector: 'ngx-ensemble-bovin',
  templateUrl: './ensemble-bovin.component.html',
  styleUrls: ['./ensemble-bovin.component.scss']
})
export class EnsembleBovinComponent implements AfterViewInit, OnDestroy, OnInit {
  options: any = {};
  themeSubscription: any;
  dataVache: any;

  nbreTaureau:any;
  constructor(private theme: NbThemeService, private bv: BovinService) {
  }
  ngOnInit(): void {
    this.bv.getNombreTaureau()
            .subscribe(res => {
              this.nbreTaureau = res;
            
            })
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.bv.getNombreVache()
        .subscribe(res => {
          const dataVache = res
          
          this.bv.getNombreTaureau()
            .subscribe(res => {
              const dataTaureau = res

              const dataVeau = this.bv.getNombreVeau()
                .subscribe(res => {
                const dataVeau = res

                  const dataVelle = this.bv.getNombreVelle()
                    .subscribe(res => {
                       const dataVelle = res

                      const dataGenisse = this.bv.getNombreGenisse()
                        .subscribe(res => {
                         const dataGenisse = res
                          this.options = {
                            backgroundColor: echarts.bg,
                            color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                            tooltip: {
                              trigger: 'item',
                              formatter: '{a} <br/>{b} : {c} ({d}%)',
                            },
                            legend: {
                              orient: 'horizontal',
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
                                data: [{ value: dataVache, name: 'Vache' },
                                { value: dataTaureau, name: 'Taureau' },
                                { value: dataVeau, name: 'Veau' },
                                { value: dataVelle, name: 'Velle' },
                                { value: dataGenisse, name: 'Genisse' },
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
                    });
                });
            });
        });
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  private random() {
    return Math.round(Math.random() * 1000);
  }

}
