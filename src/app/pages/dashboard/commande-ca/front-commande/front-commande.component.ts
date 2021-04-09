import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { FinanceService } from '../../../../service/finance.service';
import { VenteService } from '../../../../service/vente.service';
import { chiffreAnnuelle } from '../../../../_models/Finance';

@Component({
  selector: 'ngx-front-commande',
  templateUrl: './front-commande.component.html',
  styleUrls: ['./front-commande.component.scss']
})
export class FrontCommandeComponent implements OnInit {

  chiffre: chiffreAnnuelle[] = [];

  themeSubscription: any;
  chiffrel: number;
  chiffreb: number;

  partBovin: any;
  partLait: any;
 ca:any;
  data: any;
  options: any;

  constructor(private theme: NbThemeService, 
    private vte:VenteService, private fin: FinanceService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      this.vte.getVenteBovinM().subscribe(res => {
        const b = parseInt(res['2021'].map(res => res.vente.toString()));

        this.fin.getSommeLait().subscribe(res => {
          const l = parseInt(res['2021'].map(res => res.vente.toString()));

        this.ca = l + b;
        console.log(this.ca)

          this.data = {
            labels: ['Lait', 'Bovin'],
            datasets: [{
              data: [l, b],
              backgroundColor: [colors.primaryLight, colors.successLight],
            }],
          };
        })
      })

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }



}
