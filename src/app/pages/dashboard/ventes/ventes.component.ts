import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { CommandeService } from '../../../service/commande.service';
import { VenteService } from '../../../service/vente.service';
import { vente } from '../../../_models/Vente';

@Component({
  selector: 'ngx-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.scss']
})
export class VentesComponent implements OnDestroy, OnInit {

  data: any;
  options: any;
  themeSubscription: any;
  annee: any = '2021';
  ventes: vente[] = []

  constructor(private theme: NbThemeService,
    private vte: VenteService,
    private com: CommandeService
  ) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.com.getChiffreAffaireBovin().subscribe(res => {
        const dataBovin = res['2021'].map(res => res.chiffre);

      this.com.getChiffreAffaireLait()
        .subscribe(res => {
          const dataLait = res['2021'].map(res => res.chiffre);
          
          this.data = {
            labels: ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              data: dataLait,
              label: 'Lait',
              backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.9),
            }, {
              data: dataBovin,
              label: 'Bovin',
              backgroundColor: NbColorHelper.hexToRgbA(colors.successLight, 0.9),
            }],
          };

          this.options = {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              labels: {
                fontColor: chartjs.textColor,
              },
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                    color: chartjs.axisLineColor,
                  },
                  ticks: {
                    fontColor: chartjs.textColor,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                    color: chartjs.axisLineColor,
                  },
                  ticks: {
                    fontColor: chartjs.textColor,
                  },
                },
              ],
            },
          };
        })
      })
    });
  }
  ngOnInit(): void {
    this.showLait('2021');
  }
  showLait(annee) {
    this.vte.getVenteBovin(annee).subscribe(res => {
      const data = res.map(res => ({
        value: res.vente,
        name: res.mois
      }));
    })
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
