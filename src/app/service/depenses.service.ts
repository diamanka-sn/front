import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { transportAliment } from '../_models/Aliment';
import { listeDepense } from '../_models/Depense';

@Injectable({
  providedIn: 'root'
})
export class DepensesService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getAlldepense() {
    return this.http.get<listeDepense[]>(this.api + '/autreDepense/')
  }

  getFactureEau(){
    return this.http.get<transportAliment[]>(this.api + '/factureEau/')

  }
  getFactureElectricite(){
    return this.http.get<transportAliment[]>(this.api + '/factureElectricite/')
  }
  getcoutChauffage(){
    return this.http.get<transportAliment[]>(this.api + '/coutChauffage/')
  }
  getcoutEmballage(){
    return this.http.get<transportAliment[]>(this.api + '/coutEmballage/')
  }
  getcoutSterilisant(){
    return this.http.get<transportAliment[]>(this.api + '/coutSterilisant/')
  }
}
