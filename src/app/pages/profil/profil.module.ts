import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbToggleModule,
  NbCheckboxModule,
  NbDatepickerModule, 
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
} from '@nebular/theme';



@NgModule({
  declarations: [
    
  ],
  imports: [
    NbCalendarRangeModule,
    CommonModule,
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbThemeModule,
    NbToggleModule,
    NbCheckboxModule,
    NbCardModule,
    NbDatepickerModule, NbCalendarModule,
  ]
})
export class ProfilModule { }
