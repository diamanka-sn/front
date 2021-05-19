import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../_models/config'

import { phaseVache, productionLait, productionTotale, quantiteTotal, quantiteVendu, Stock, VenteBovin, VenteLait, venteMois } from '../_models/Production';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getProductionLait(): Observable<productionLait[]> {
    return this.http.get<productionLait[]>(`${config.apiUrl}/productionLaitM/`)

  }

  getQuantiteProduite() {
    return this.http.get(`${config.apiUrl}/productionM/`)

  }
  getQuantiteVendue() {
    return this.http.get(`${config.apiUrl}/quantiteVenduM/`)

  }

  getPhaseVache() {
    return this.http.get<phaseVache[]>(`${config.apiUrl}/periodeMois/`)
      .map(resultat => resultat)
  }
  getStockDisponible() {
    return this.http.get<Stock[]>(`${config.apiUrl}/bouteilleStockM/`)
  }

  getStockMoisCourant() {
    return this.http.get<Stock[]>(`${config.apiUrl}/stockMoisCourant/`)
  }

  getStockMoisPasse() {
    return this.http.get<Stock[]>(`${config.apiUrl}/stockMoisPasse/`)
  }

  getLaitVenteLait() {
    return this.http.get<VenteLait[]>(`${config.apiUrl}/sommeLaitVendu/`)
      .map(resultat => resultat)
  }
  getProductionvendu() {
    return this.http.get<quantiteVendu[]>(`${config.apiUrl}/quantitesLaitVenduMois/`)
      .map(resultat => resultat)
  }

  getProductionTotale() {
    return this.http.get<quantiteTotal[]>(`${config.apiUrl}/productionTotale/`)
      .map(resultat => resultat)
  }
  getProductionDuMois() {
    return this.http.get<quantiteTotal[]>(`${config.apiUrl}/prdoductionDuMois/`)
      .map(resultat => resultat)
  }
  getProductionMoisPasse() {
    return this.http.get<quantiteTotal[]>(`${config.apiUrl}/prdoductionMoisPasse/`)
      .map(resultat => resultat)
  }
  getVenteMoisCourant() {
    return this.http.get<venteMois[]>(`${config.apiUrl}/quantiteVenteMoisCourant/`)
  }
  getVenteMoisPasse() {
    return this.http.get<venteMois[]>(`${config.apiUrl}/quantiteVenteMoisPasse/`)
  }

  getVenteLaitTotal() {
    return this.http.get<venteMois[]>(`${config.apiUrl}/quantitesVendu/`)
  }

  getVenteBovinMoisCourant() {
    return this.http.get<VenteBovin[]>(`${config.apiUrl}/BovinVenduMoisCourant/`)
  }
  
}

