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
  NbTreeGridModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { AlimentationComponent } from './alimentation.component';
import { CoutComponent } from './cout/cout.component';
import { StockComponent } from './stock/stock.component';
import { ConsommationComponent } from './consommation/consommation.component';
import { AlimentComponent } from './aliment/aliment.component';
import { ConsommationJourComponent } from './consommation-jour/consommation-jour.component';
import { ChartModule } from 'angular2-chartjs';
@NgModule({
  declarations: [
    AlimentationComponent,
    CoutComponent,
    StockComponent,
    ConsommationComponent,
    AlimentComponent,
    ConsommationJourComponent,
  ],
  imports: [
    CommonModule,
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
    ChartModule, NbTreeGridModule,
  ]
})
export class AlimentationModule { }
