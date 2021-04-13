import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  NbTreeGridModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { ProductionComponent } from './production.component';

import { CourbeProductionComponent } from './courbe-production/courbe-production.component';
import { ChargesProductionComponent } from './charges-production/charges-production.component';
// import { PeriodiciteComponent } from './periodicite/periodicite.component';
import { CoutPeriodiciteComponent } from './cout-periodicite/cout-periodicite.component';
import { BackProductionComponent } from './cout-periodicite/back-production/back-production.component';
import { FrontPeriodiciteComponent } from './cout-periodicite/front-periodicite/front-periodicite.component';


@NgModule({
  declarations: [
    ProductionComponent,
   
    CourbeProductionComponent,
    ChargesProductionComponent,
    CoutPeriodiciteComponent,
    BackProductionComponent,
    FrontPeriodiciteComponent,

  ],
  imports: [
    ChartModule,
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
    NbTreeGridModule,
  ]
})
export class ProductionModule { }
