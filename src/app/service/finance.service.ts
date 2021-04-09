import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { factureLait } from '../_models/Factures';
import { chiffre, chiffreAffaire, chiffreAnnuelle, tansportBovin } from '../_models/Finance';

import {config} from '../_models/config'

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getChiffreAnnuelleLait() {
    return this.http.get<chiffreAnnuelle[]>(`${config.apiUrl}/chiffreAnnuelleLait/`)
      .map(resultat => resultat)
  }
  getChiffreAnnuelleBovin() {
    return this.http.get<chiffreAnnuelle[]>(`${config.apiUrl}/chiffreAnnuelleBovin/`)
      .map(resultat => resultat)
  }
  getCoutBovin() {
    return this.http.get(`${config.apiUrl}/coutBovin/`)
  }
  getChiffreLait() {
    return this.http.get<chiffreAffaire[]>(`${config.apiUrl}/chiffreAffaireLait/`)
      .map(resultat => resultat)
  }
  getChiffreBovin() {
    return this.http.get<chiffreAffaire[]>(`${config.apiUrl}/chiffreAffaireBovin/`)
      .map(resultat => resultat)
  }

  getChargeAutreDepense(){
    return this.http.get(`${config.apiUrl}/chargeAutreDepense/`)
    .map(resultat => resultat)
  }



  //factures Lait
  getFactureLait(){
    return this.http.get<factureLait[]>(`${config.apiUrl}/listFactureLaitDetaille/`)
    .map(resultat => resultat)
  }

  getCotTransport(){
    return this.http.get<tansportBovin[]>(`${config.apiUrl}/coutTransportM/`)
    .map(resultat => resultat)
  }

  getCoutsBovin() {
    return this.http.get(`${config.apiUrl}/SommeAchatBovin/`)
  }
  getCoutExistant() {
    return this.http.get(`${config.apiUrl}/prixBovinExistant/`)
  }

  getCoutSalaireBovin(){
    return this.http.get<tansportBovin[]>(`${config.apiUrl}/factureSalaire/`)
    .map(resultat => resultat)
  }
  getCoutSalaireLait(){
    return this.http.get<tansportBovin[]>(`${config.apiUrl}/salaireLait/`)
    .map(resultat => resultat)
  }

  getSommeLait(){
    return this.http.get<chiffre[]>(`${config.apiUrl}/sommeLaitM/`)
    .map(resultat => resultat)
  }
}
