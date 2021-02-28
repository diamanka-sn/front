import { Component, OnInit,OnDestroy } from '@angular/core';
import {NbCalendarRange, NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  range: NbCalendarRange<Date>;
  constructor(  protected dateService: NbDateService<Date>) {
    
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }

  ngOnInit(): void {
  }

  
  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }
}