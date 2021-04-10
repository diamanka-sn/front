import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
// import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { AchatService } from '../../service/achat.service';
import { AlimentationService } from '../../service/alimentation.service';
import { CommandeService } from '../../service/commande.service';
import { DepensesService } from '../../service/depenses.service';
import { FinanceService } from '../../service/finance.service';
import { UtilisateurService } from '../../service/utilisateur.service';
import { VenteService } from '../../service/vente.service';
import { listeDepense, typeDepense } from '../../_models/Depense';
import { moyenPaiement } from '../../_models/Facture';




// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "./variables/charts";
@Component({
  selector: 'ngx-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./argon.scss']
})

export class FinanceComponent implements OnInit, AfterViewInit, OnDestroy {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  types: typeDepense[] = []

  bovin: number;
  aliment: number;
  autre: number;
  total: number;

  lait: number;
  caBovin: number;
  sommeca: number;

  coutMois: number;
  coutpasse: number;
  pourcentage: number;

  nombrecommande: any;
  nombreComCourant: number;
  nombreCompasse: number;
  pourcentageCommande: number;

  laitCourant: number;
  laitPasse: number;
  pourcentageLait: number;

  masseSalaire: number;

  paiement: moyenPaiement[] = []
  transaction: number;
  themeSubscription: any;
  constructor(private theme: NbThemeService,
    private fn: FinanceService,
    private dep: DepensesService,
    private al: AlimentationService,
    private ach: AchatService,
    private com: CommandeService,
    private vte: VenteService,
    private user: UtilisateurService) { }

  ngAfterViewInit(): void {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.ach.getNombreTransaction().subscribe(res => {
      this.transaction = parseInt(res.toString());
    })
    this.ach.getMoyenPaiement().subscribe(res => {
      this.paiement = res;
    })
    this.vte.getVenteLaitMoisCourant().subscribe(res => {
      this.laitCourant = parseInt(res['2021'].map(res => res.montant.toString()));
      this.vte.getVenteLaitMoisPasse().subscribe(res => {
        this.laitPasse = parseInt(res['2021'].map(res => res.montant.toString()));
        this.pourcentageLait = ((this.laitCourant - this.laitPasse) / this.laitCourant) * 100;
      })
    })
    this.com.getNombreCommande().subscribe(res => {
      this.nombrecommande = res;
    })
    this.com.getNombreCommandeMoisCourant().subscribe(res => {
      this.nombreComCourant = parseInt(res['2021'].map(res => res.montant.toString()));
      this.com.getNombreCommandeMoisPasse().subscribe(res => {
        this.nombreCompasse = parseInt(res['2021'].map(res => res.montant.toString()));

        this.pourcentageCommande = ((this.nombreComCourant - this.nombreCompasse) / this.nombreComCourant) * 100
      })
    })
    this.dep.getCoutdepenseMoisCourant().subscribe(res => {
      this.coutMois = parseInt(res['2021'].map(res => res.montant.toString()));
      this.dep.getCoutdepenseMoisPasse().subscribe(res => {
        this.coutpasse = parseInt(res['2021'].map(res => res.montant.toString()));
        this.pourcentage = ((this.coutMois - this.coutpasse) / this.coutMois) * 100;

      })
    })
    this.fn.getSommeLait().subscribe(res => {
      this.lait = parseInt(res['2021'].map(res => res.vente.toString()));

      this.vte.getVenteBovinM().subscribe(res => {

        this.caBovin = parseInt(res['2021'].map(res => res.vente.toString()));
        this.sommeca = this.lait + this.caBovin
      })

    })
    this.dep.getListeDepenseM().subscribe(res => {
      this.types = res['2021'];
      // console.log(this.types)
    })
    this.fn.getChargeAutreDepense().subscribe(res => {
      this.autre = parseInt(res['2021'].map(res => res.achetes.toString()))

      this.user.getSalaireFermier().subscribe(res => {
        this.masseSalaire = parseInt(res['2021'].map(res => res.salaires.toString()));
        this.al.getChargeAlimentation().subscribe(res => {
          this.aliment = parseInt(res['2021'].map(res => res.achetes.toString()))

          this.ach.getAchatBovinM().subscribe(res => {
            this.bovin = parseInt(res['2021'].map(res => res.prix.toString()))
            this.total = this.autre + this.aliment + this.bovin + this.masseSalaire;
          })
        })
      })
    })




    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());

    this.com.getNombreCommandeParMois().subscribe(res => {
      const commande = res['2021'].map(res => res.nombre)
      var ordersChart = new Chart(chartOrders, {
        type: 'bar',
        data: {
          labels: ["Jan", "Fev", "Mars", "Avril", "Mai", "Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Commandes",
              data: commande
            }
          ]
        },
        options: chartExample2.options,

      });
    });
    var chart_labels = ['jan', 'fev', 'mars', 'avril', 'mai', 'juin', 'juil', 'aout', 'sept', 'oct', 'nov', 'dec'];
    this.vte.getVenteLaitMensuelle().subscribe(res => {
      const somme = res['2021'].map(res => res.vente)
      this.vte.getVenteBovintMensuelle().subscribe(res => {
        const bovin = res['2021'].map(res => res.vente)
        this.datasets = [
          somme,
          bovin
        ];
        this.data = this.datasets[0];
      })
    })

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'bar',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "Ventes",
          data: this.data
        }],
      },
      options: chartExample1.options,
    });


  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

