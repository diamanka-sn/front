import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  NbInputModule,
  NbTreeGridModule,
  NbToggleModule,
  NbAccordionModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { BovinComponent } from './bovin.component';
import { EnsembleBovinComponent } from './ensemble-bovin/ensemble-bovin.component';
import { CardNombreComponent } from './card-nombre/card-nombre.component';
import { ListeTableComponent } from './liste-table/liste-table.component';
import {FsIconComponent} from './liste-table/liste-table.component';
import { RaceComponent } from './race/race.component';
import { BovinAchatsComponent } from './bovin-achats/bovin-achats.component';
import { DetailBovinComponent } from './liste-table/detail-bovin/detail-bovin.component';
import { ListeBovinComponent } from './liste-bovin/liste-bovin.component';


@NgModule({
  declarations: [
    BovinComponent,
    EnsembleBovinComponent,
    CardNombreComponent,
    ListeTableComponent,
    FsIconComponent,
    RaceComponent,
    BovinAchatsComponent,
    DetailBovinComponent,
    ListeBovinComponent,
  ],
  imports: [
    Ng2SmartTableModule,
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
    NbInputModule, NbTreeGridModule ,
    NgxChartsModule,ChartModule,  NbToggleModule,
    NbAccordionModule,
  ]
})
export class BovinModule { }