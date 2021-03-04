import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { BovinService } from '../../../service/bovin.service';

@Component({
  selector: 'ngx-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements AfterViewInit, OnDestroy,OnInit {
  
  nbreRace:any;
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, private bs: BovinService) {
  }
  ngOnInit(): void {
  
  }

  showNombreRace(){
    this.bs.getRace().subscribe(res => {
      this.nbreRace = res;
      console.log("le nombre de RAce dans la ferme sont :"+this.nbreRace)
    })
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
          data: ['Holsain', 'Monbelliar', 'Limousine', 'Normande', 'Brune'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Race',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [
              { value: this.random(), name: 'Holsain' },
              { value: this.random(), name: 'Monbelliar' },
              { value: this.random(), name: 'Limousine' },
              { value: this.random(), name: 'Normande' },
              { value: this.random(), name: 'Brune' },
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
