import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { transportAliment } from '../_models/Aliment';
import { listeDepense } from '../_models/Depense';

import {config} from '../_models/config'

@Injectable({
  providedIn: 'root'
})
export class DepensesService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getAlldepense() {
    return this.http.get<listeDepense[]>(`${config.apiUrl}/autreDepense/`)
  }
  
  getFactureEau(){
    return this.http.get<transportAliment[]>(`${config.apiUrl}/factureEau/`)

  }
  getFactureElectricite(){
    return this.http.get<transportAliment[]>(`${config.apiUrl}/factureElectricite/`)
  }
  getcoutChauffage(){
    return this.http.get<transportAliment[]>(`${config.apiUrl}/coutChauffage/`)
  }
  getcoutEmballage(){
    return this.http.get<transportAliment[]>(`${config.apiUrl}/coutEmballage/`)
  }
  getcoutSterilisant(){
    return this.http.get<transportAliment[]>(`${config.apiUrl}/coutSterilisant/`)
  }
}
