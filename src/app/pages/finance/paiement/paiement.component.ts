import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AchatService } from '../../../service/achat.service';

@Component({
  selector: 'ngx-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent implements AfterViewInit, OnDestroy, OnInit {


  nbreRace: any;
  options: any = {};
  themeSubscription: any;
  existant: any;



  echartsInstance;

  constructor(private theme: NbThemeService, private ach: AchatService) {

  }

  ngOnInit(): void {

  }


  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;
      this.ach.getMoyenPaiement()
        .subscribe(res => {
          const labels = res.map(res => res.paiement);
          const data = res.map(res => ({
            value: res.nombre,
            name: res.paiement
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
                name: 'Moyen de paiement',
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
