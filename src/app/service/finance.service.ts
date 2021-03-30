import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chiffreAffaire, chiffreAnnuelle } from '../_models/Finance';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  api: string = 'http://10.156.93.190:5000/api';

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
}
