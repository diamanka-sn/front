import { getLocaleDateFormat } from '@angular/common';
import { SimpleChanges } from '@angular/core';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ChartCommonModule } from '@swimlane/ngx-charts';
import { takeWhile } from 'rxjs/operators';
import { RaceService } from '../../../service/race.service';
import { RaceExistant } from '../../../_models/Race';

@Component({
  selector: 'ngx-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements AfterViewInit, OnDestroy, OnInit {


  nbreRace: any;
  options: any = {};
  themeSubscription: any;
  existant: any;

  public races = [];
  public nombre = [];


  echartsInstance;

  constructor(private theme: NbThemeService, private rs: RaceService) {

  }

  ngOnInit(): void {
    this.rs.getNombreRace().subscribe(res => {
      this.nbreRace = res;
    })




    // this.rs.getRaceExistant()
    //   .subscribe(
    //     (response) => {


    //       // for (let i = 0; i < this.existant.length; i++) {
    //       // this.xlabels = this.existant[i].nomRace;
    //       //   const data = this.existant[i].nombre
    //       //   console.log('/' + data)
    //       // }

    //     })
  }

  // getData(){

  //   this.rs.getRaceExistant()
  //     .subscribe(
  //       (response) => {
  //         this.existant = response;
  //         // const usersJson: any[] = Array.of(this.existant);
  //         // var result = Object.keys(this.existant).map(e=>this.existant[e]);

  //         //  const table = result.split('\n').slice(1);

  //         //  let slag = this.existant.map(doc => Object.values(doc));

  //         //  console.log(slag)

  //         for (let i = 0; i < this.existant.length; i++) {
  //           const data = this.existant[i].nombre
  //           console.log('/' + data)
  //         }

  //       })
  // }
  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.rs.getRaceExistant()
        .subscribe(res => {
          const labels = res.map(res => res.race);
          const data = res.map(res => ({
            value : res.nombre,
            name :res.race
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
                name: 'Race',
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
