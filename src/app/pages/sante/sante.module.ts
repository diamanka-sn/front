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

@NgModule({
  declarations: [
    SanteComponent,
    ConsultationComponent,
    MaladieDetecterComponent,
    ChargeSanteComponent,
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
  ]
})
export class SanteModule { }
