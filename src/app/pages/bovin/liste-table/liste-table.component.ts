import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { BovinService } from './../../../service/bovin.service';

import { NbThemeService } from '@nebular/theme';

import { AchatService } from '../../../service/achat.service';


interface TableBovin {
  Nom: string;
  dateNaissance: string;
  race: string;
  phase: string;

}

@Component({
  selector: 'ngx-liste-table',
  templateUrl: './liste-table.component.html',
  styleUrls: ['./liste-table.component.scss']
})
export class ListeTableComponent implements AfterViewInit, OnInit, OnDestroy {
 
  nbreRace:any;
  nbreVache:any;
  nbreAchat:any;
  bovinnbre: any;
  bovin: any;
  themeSubscription: any;
  constructor(  private bs: BovinService,
                private theme: NbThemeService,
                private ab: AchatService) { 
   
  }
  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
    });
  }
  ngOnInit(): void {
    this.showAllBovin(); 
  }
  //nombre de race dans la ferme
  
  //liste nombre de bovin achetes
  showNombreAchatBovin(){
    this.ab.getNombreAchatBovin().subscribe(res =>{
      this.nbreAchat = res;
      console.log("le nombre d'achat de bovins"+this.nbreAchat);
    })
  }
  //nbre de vache
  showNombreVache(){
    this.bs.getNombreVache().subscribe(res =>{
        this.nbreVache = res;
        console.log("le nombre de vache dans la ferme"+this.nbreVache)
    })
  }
  //liste des bovin
  showAllBovin() {
    this.bs.getBovin().subscribe(res => {
      this.bovin = res;
      // this.bovin = bovin;
      // let obj = JSON.stringify(this.bovin)
      // console.log(obj);
    })
  }
  showNombreBovin() {
    this.bs.getNombreBovin().subscribe(res => {
      this.bovinnbre = res;
      console.log("Le nombre de bovin est :"+this.bovinnbre)
      // this.bovin = bovin;
      // let obj = JSON.stringify(this.bovin)
      // console.log(obj);
    })
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  options = [
    { value: 'Vache', label: 'Vache' },
    { value: 'taureau', label: 'Taureau' },
    { value: 'veau', label: 'Veau' },
    { value: 'tout', label: 'Tout' },
  ];
 
}
