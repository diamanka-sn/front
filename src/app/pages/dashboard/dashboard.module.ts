import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

import { FormsModule } from '@angular/forms';
import { CardChiffreComponent } from './card-chiffre/card-chiffre.component';
import { CardCommandeComponent } from './card-commande/card-commande.component';
import { CardProductionComponent } from './card-production/card-production.component';
import { CardVenteComponent } from './card-vente/card-vente.component';
import { CardSanteComponent } from './card-sante/card-sante.component';
import { CardAlimentationComponent } from './card-alimentation/card-alimentation.component';
import { CardVelageComponent } from './card-velage/card-velage.component';
import { VentesComponent } from './ventes/ventes.component';
import { CardMortaliteComponent } from './card-mortalite/card-mortalite.component';
import { CardNataliteComponent } from './card-natalite/card-natalite.component';
import { ActiviteComponent } from './activite/activite.component';
import { GrapheProductionComponent } from './graphe-production/graphe-production.component';
import {CardPeriode} from './card-alimentation/card-periode.component';
import {CardAliment} from './card-alimentation/card-aliment.component';

import {CardPie} from './card-sante/card-pie.component';
import { PeriodeComponent } from './periode/periode.component';
import { PhaseComponent } from './phase/phase.component';
import { FrontComponent } from './card-vente/front/front.component';
import { BackComponent } from './card-vente/back/back.component';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    ChartModule,
    NgxChartsModule,
  ],
  declarations: [
    DashboardComponent,
    CardChiffreComponent,
    CardCommandeComponent,
    CardProductionComponent,
    CardVenteComponent,
    CardSanteComponent,
    CardAlimentationComponent,
    CardVelageComponent,
    VentesComponent,
    
    CardMortaliteComponent,
    CardNataliteComponent,
    ActiviteComponent,
    GrapheProductionComponent,
    
    CardPeriode,
    CardAliment,
    CardPie,
    PeriodeComponent,
    PhaseComponent,
    FrontComponent,
    BackComponent,
  ],
})
export class DashboardModule { }
