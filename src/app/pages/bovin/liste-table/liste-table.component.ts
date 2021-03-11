import {  Component, OnInit,  } from '@angular/core';
import { BovinService } from './../../../service/bovin.service';

import { AchatService } from '../../../service/achat.service';
import { Bovins } from '../../../_models/Bovins';
import { DetailsBovin } from '../../../_models/DetailsBovin';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'ngx-liste-table',
  templateUrl: './liste-table.component.html',
  styleUrls: ['./liste-table.component.scss']
})
export class ListeTableComponent implements  OnInit {

  nbreRace: any;
  nbreVache: any;
  nbreAchat: any;
  bovinnbre: any;
  bovin: any;
  nom: any;
  situation : any;
  themeSubscription: any;


  bovins: Bovins[] = [];
  details : DetailsBovin [] = [];
  p: number = 1;
  constructor(private bs: BovinService,
    private ab: AchatService,
    private modalService: NgbModal) { }
 
  ngOnInit(): void {
    this.bs.getBovin().subscribe((response) => {
      this.bovins = response;
    })
  }

  Rechercher() {
    if (this.nom == "") {
      this.ngOnInit();
    } else {
      this.bovins = this.bovins.filter(res => {
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      });
    }
  }
  Details(){
    
  }
  key: string = 'nom';
  reverse: boolean = false;
  Trier(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  //nombre de race dans la ferme

  //liste nombre de bovin achetes
  showNombreAchatBovin() {
    this.ab.getNombreAchatBovin().subscribe(res => {
      this.nbreAchat = res;
      console.log("le nombre d'achat de bovins" + this.nbreAchat);
    })
  }
  //nbre de vache
  showNombreVache() {
    this.bs.getNombreVache().subscribe(res => {
      this.nbreVache = res;
      console.log("le nombre de vache dans la ferme" + this.nbreVache)
    })
  }

  showNombreBovin() {
    this.bs.getNombreBovin().subscribe(res => {
      this.bovinnbre = res;
      console.log("Le nombre de bovin est :" + this.bovinnbre)
      // this.bovin = bovin;
      // let obj = JSON.stringify(this.bovin)
      // console.log(obj);
    })
  }

  showBovinDetail(idBovin){
    this.bovins.forEach(el =>{
      if(idBovin == el.idBovin){
        this.bs.getBovinDetails(idBovin).subscribe(res => {
            this.details = res;
        })
      }
    })
  }

  options = [
    { value: 5, label: 'Vache' },
    { value: 10, label: 'Taureau' },
    { value: 15, label: 'Veau' },
    { value: 20, label: 'Tout' },
  ];

}
