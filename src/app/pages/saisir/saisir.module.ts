import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as ngFormsModule } from '@angular/forms';


import { SaisirComponent } from './saisir.component';



@NgModule({
  declarations: [SaisirComponent],
  imports: [
    CommonModule,
    ngFormsModule,
  ]
})
export class SaisirModule { }
