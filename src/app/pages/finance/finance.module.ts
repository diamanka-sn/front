import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
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
  NbDatepickerModule,
  NbInputModule, NbTreeGridModule, NbToggleModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';

// import { ComptesComponent } from './comptes/comptes.component';

// import { AchatsComponent } from './achats/achats.component';


import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FacturesComponent } from './factures/factures.component';
// import { LaitComponent } from './factures/lait/lait.component';
// import { BovinsFComponent } from './factures/bovins-f/bovins-f.component';

// import { PaiementComponent } from './paiement/paiement.component';
// import { CoutMatiereComponent } from './coutAchat/cout-matiere/cout-matiere.component';
// import { CoutRevientComponent } from './coutAchat/cout-revient/cout-revient.component';
@NgModule({
  declarations: [
    FinanceComponent,
  ],
  imports: [
    NbDatepickerModule,
    NgxEchartsModule,
    ThemeModule,
    CommonModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbToggleModule,
    NbInputModule, NbTreeGridModule,
    ChartModule,
    NgxChartsModule,




    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule,
  ]
})
export class FinanceModule { }
