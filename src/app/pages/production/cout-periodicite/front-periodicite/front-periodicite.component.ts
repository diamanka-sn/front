import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ProductionService } from '../../../../service/production.service';

@Component({
  selector: 'ngx-front-periodicite',
  templateUrl: './front-periodicite.component.html',
  styleUrls: ['./front-periodicite.component.scss']
})
export class FrontPeriodiciteComponent implements AfterViewInit, OnDestroy, OnInit {


  nbreRace: any;
  options: any = {};
  themeSubscription: any;
  existant: any;

  // public races = [];
  // public nombre = [];


  echartsInstance;

  constructor(private theme: NbThemeService, private prod:ProductionService) {

  }

  ngOnInit(): void {
       
    }


  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.prod.getPhaseVache()
        .subscribe(res => {
          const labels = res['2021'].map(res => res.periode);
          const data = res['2021'].map(res => ({
            value : res.nombre,
            name :res.periode
          }));
          this.options = {
        
            backgroundColor: echarts.bg,
           // color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: labels,
              textStyle: {
                color: echarts.textColor,
              },
            },
            series: [
              {
                name: 'Phase',
                type: 'pie',
                radius: '70%',
                center: ['50%', '50%'],
                data: data,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgb(0,0,1,0.5)',
                  },
                },
                label: {
                  normal: {
                    textStyle: {
                      color: echarts.textColor,
                    },
                  },
                },
              },
            ],
          }

        });



    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
 

}
