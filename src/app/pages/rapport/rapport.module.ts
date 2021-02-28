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
import { RapportComponent } from './rapport.component';
@NgModule({
  declarations: [
    RapportComponent
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
export class RapportModule { }
