import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { factureLait } from '../_models/Factures';
import { chiffreAffaire, chiffreAnnuelle, tansportBovin } from '../_models/Finance';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getChiffreAnnuelleLait() {
    return this.http.get<chiffreAnnuelle[]>(this.api + '/chiffreAnnuelleLait/')
      .map(resultat => resultat)
  }
  getChiffreAnnuelleBovin() {
    return this.http.get<chiffreAnnuelle[]>(this.api + '/chiffreAnnuelleBovin/')
      .map(resultat => resultat)
  }
  getCoutBovin() {
    return this.http.get(this.api + '/coutBovin/')
  }
  getChiffreLait() {
    return this.http.get<chiffreAffaire[]>(this.api + '/chiffreAffaireLait/')
      .map(resultat => resultat)
  }
  getChiffreBovin() {
    return this.http.get<chiffreAffaire[]>(this.api + '/chiffreAffaireBovin/')
      .map(resultat => resultat)
  }

  getChargeAutreDepense(){
    return this.http.get(this.api + '/chargeAutreDepense/')
    .map(resultat => resultat)
  }



  //factures Lait
  getFactureLait(){
    return this.http.get<factureLait[]>(this.api + '/listFactureLaitDetaille/')
    .map(resultat => resultat)
  }

  getCotTransport(){
    return this.http.get<tansportBovin[]>(this.api + '/coutTransportM/')
    .map(resultat => resultat)
  }

  getCoutsBovin() {
    return this.http.get(this.api + '/SommeAchatBovin/')
  }
  getCoutExistant() {
    return this.http.get(this.api + '/prixBovinExistant/')
  }
  
}
