import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../_models/config'

import { phaseVache, productionLait, productionTotale, VenteLait } from '../_models/Production';

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
    return this.http.get(`${config.apiUrl}/stockDisponible/`)
  }

  getLaitVenteLait() {
    return this.http.get<VenteLait[]>(`${config.apiUrl}/sommeLaitVendu/`)
      .map(resultat => resultat)
  }
}
