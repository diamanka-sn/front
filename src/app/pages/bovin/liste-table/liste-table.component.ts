import {  Component, OnInit,  } from '@angular/core';
import { BovinService } from './../../../service/bovin.service';

import { AchatService } from '../../../service/achat.service';
import { Bovins } from '../../../_models/Bovins';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
  options = [
    { value: 5, label: 'Vache' },
    { value: 10, label: 'Taureau' },
    { value: 15, label: 'Veau' },
    { value: 20, label: 'Tout' },
  ];

  closeResult = '';
  open(content,idBovin) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
