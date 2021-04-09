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
// import { CardChiffreComponent } from './card-chiffre/card-chiffre.component';
// import { CardCommandeComponent } from './card-commande/card-commande.component';
import { CardProductionComponent } from './card-production/card-production.component';
import { CardVenteComponent } from './card-vente/card-vente.component';

import { CardVelageComponent } from './card-velage/card-velage.component';
import { VentesComponent } from './ventes/ventes.component';
import { ActiviteComponent } from './activite/activite.component';
import { GrapheProductionComponent } from './graphe-production/graphe-production.component';

import { PeriodeComponent } from './periode/periode.component';
import { PhaseComponent } from './phase/phase.component';
import { FrontComponent } from './card-vente/front/front.component';
import { BackComponent } from './card-vente/back/back.component';
import { DemographieComponent } from './demographie/demographie.component';
import { FNataliteComponent } from './demographie/f-natalite/f-natalite.component';
import { BNataliteComponent } from './demographie/b-natalite/b-natalite.component';
import { CommandeCaComponent } from './commande-ca/commande-ca.component';
import { FrontCommandeComponent } from './commande-ca/front-commande/front-commande.component';
import { BackCommandeComponent } from './commande-ca/back-commande/back-commande.component';
import { AlimentationSanteComponent } from './alimentation-sante/alimentation-sante.component';
import { FrontAlimentationComponent } from './alimentation-sante/front-alimentation/front-alimentation.component';
import { BackSanteComponent } from './alimentation-sante/back-sante/back-sante.component';
import { PeriodePhaseComponent } from './periode-phase/periode-phase.component';
import { FrontPeriodeComponent } from './periode-phase/front-periode/front-periode.component';
import { BackPhaseComponent } from './periode-phase/back-phase/back-phase.component';

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
    CardProductionComponent,
    CardVenteComponent,
  
    CardVelageComponent,
    VentesComponent,
    
   
    ActiviteComponent,
    GrapheProductionComponent,
    
    
    PeriodeComponent,
    PhaseComponent,
    FrontComponent,
    BackComponent,
    DemographieComponent,
    FNataliteComponent,
    BNataliteComponent,
    CommandeCaComponent,
    FrontCommandeComponent,
    BackCommandeComponent,
    AlimentationSanteComponent,
    FrontAlimentationComponent,
    BackSanteComponent,
    PeriodePhaseComponent,
    FrontPeriodeComponent,
    BackPhaseComponent,
   
  ],
})
export class DashboardModule { }
