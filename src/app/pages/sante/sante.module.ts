import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { SanteComponent } from './sante.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { MaladieDetecterComponent } from './maladie-detecter/maladie-detecter.component';
import { ChargeSanteComponent } from './charge-sante/charge-sante.component';
import { MaladieComponent } from './maladie/maladie.component';
import { MedicamentComponent } from './medicament/medicament.component';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    SanteComponent,
    ConsultationComponent,
    MaladieDetecterComponent,
    ChargeSanteComponent,
    MaladieComponent,
    MedicamentComponent,
  ],
  imports: [
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

    Ng2OrderModule,
    NgbModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ]
})
export class SanteModule { }
