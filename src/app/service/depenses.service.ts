import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { transportAliment } from '../_models/Aliment';
import { depensesMensuelle, listeDepense, typeDepense } from '../_models/Depense';

import { config } from '../_models/config'

@Injectable({
  providedIn: 'root'
})
export class DepensesService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getAlldepense() {
    return this.http.get<listeDepense[]>(`${config.apiUrl}/autreDepense/`)
  }

  getFactureEau() {
    return this.http.get<transportAliment[]>(`${config.apiUrl}/factureEau/`)

  }
  getFactureElectricite() {
    return this.http.get<transportAliment[]>(`${config.apiUrl}/factureElectricite/`)
  }
  getcoutChauffage() {
    return this.http.get<transportAliment[]>(`${config.apiUrl}/coutChauffage/`)
  }
  getcoutEmballage() {
    return this.http.get<transportAliment[]>(`${config.apiUrl}/coutEmballage/`)
  }
  getcoutSterilisant() {
    return this.http.get<transportAliment[]>(`${config.apiUrl}/coutSterilisant/`)
  }
  getListeDepenseM() {
    return this.http.get<typeDepense[]>(`${config.apiUrl}/listeTypeDepensesM/`)
      .map(resultat => resultat)
  }

  getCoutdepenseMoisCourant() {
    return this.http.get<depensesMensuelle[]>(`${config.apiUrl}/coutdepensesMoisCourant/`)
      .map(resultat => resultat)
  }
  getCoutdepenseMoisPasse() {
    return this.http.get<depensesMensuelle[]>(`${config.apiUrl}/coutDepensesMoisPasse/`)
      .map(resultat => resultat)
  }
}
