import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AfterViewInit,  OnDestroy } from '@angular/core';
import { MaladieService } from '../../../service/maladie.service';
// import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'ngx-maladie',
  templateUrl: './maladie.component.html',
  styleUrls: ['./maladie.component.scss']
})
export class MaladieComponent implements AfterViewInit, OnDestroy, OnInit {


  options: any = {};
  themeSubscription: any;
  existant: any;

  // public races = [];
  // public nombre = [];



  constructor(private theme: NbThemeService,private ml:MaladieService) {

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.ml.getMaladieFeme()
        .subscribe(res => {
          const labels = res.map(res => res.maladie);
          const data = res.map(res => ({
            value: res.nombre,
            name: res.maladie
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
                name: 'Maladie',
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
