import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommandeService } from '../../../service/commande.service';
import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'ngx-card-commande',
  templateUrl: './card-commande.component.html',
  styleUrls: ['./card-commande.component.scss']
})
export class CardCommandeComponent implements OnInit {
  data: any;
  options: any;
  themeSubscription: any;
  nbreCommande: any;
  constructor(private cm: CommandeService, private theme: NbThemeService) {


    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.cm.getNombreCommandeBovin().subscribe(res => {
        const b = res
      
      this.cm.getNombreCommandeLait().subscribe(res => {
        const l = res
      
        this.data = {
          labels: [ 'Lait','Bovin'],
          datasets: [{
            data: [l,b],
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
ngOnDestroy(): void {
  this.themeSubscription.unsubscribe();
}
ngOnInit(): void {
  this.cm.getNombreCommande().subscribe(res => {
    this.nbreCommande = res;
  })
}

}
