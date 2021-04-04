import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { alimentationJour, stock, stockAliment, type } from '../_models/Aliment';
import {config} from '../_models/config'

@Injectable({
  providedIn: 'root'
})
export class AlimentationService {
  //api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getTypeAliment() {
    return this.http.get<type[]>(`${config.apiUrl}/typeAliment/`)
      .map(resultat => resultat)
  }

  getQuantiteStock() {
    return this.http.get<stock[]>(`${config.apiUrl}/quantiteAchetes/`)
      .map(resultat => resultat)
  }

  getQuantiteConsommees() {
    return this.http.get<stock[]>(`${config.apiUrl}/quantiteConsommes/`)
      .map(resultat => resultat)
  }
  getStockAliment() {
    return this.http.get<stockAliment[]>(`${config.apiUrl}/stock/`)
      .map(resultat => resultat)
  }

  getConsommationMois() {
    return this.http.get(`${config.apiUrl}/consommationMois/`)
      .map(resultat => resultat)
  }

  getChargeAlimentation() {
    return this.http.get(`${config.apiUrl}/chargeAlimentation/`)
      .map(resultat => resultat)
  }

  getAlimentationDuJour() {
    return this.http.get<alimentationJour[]>(`${config.apiUrl}/listeAlimentationJour/`)
      .map(resultat => resultat)

  }

}
