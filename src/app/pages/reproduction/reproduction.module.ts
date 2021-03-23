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
import { ChartModule } from 'angular2-chartjs';
import { ReproductionComponent } from './reproduction.component';
import { CardVelageComponent } from '../dashboard/card-velage/card-velage.component';
import { CourbePeriodeComponent } from './courbe-periode/courbe-periode.component';
import { CourbeVelageComponent } from './courbe-velage/courbe-velage.component';
import { AccroissementComponent } from './accroissement/accroissement.component';

@NgModule({
  declarations: [
    ReproductionComponent,
    CourbePeriodeComponent,
    CourbeVelageComponent,
    AccroissementComponent,

    
  ],
  imports: [
    ChartModule,
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
export class ReproductionModule { }
