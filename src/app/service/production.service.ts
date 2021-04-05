import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { phaseVache, productionLait, productionTotale, VenteLait } from '../_models/Production';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getProductionLait(): Observable<productionLait[]> {
    return this.http.get<productionLait[]>(this.api + '/productionLaitM/')
      .map(resultat => resultat)
  }

  getQuantiteProduite() {
    return this.http.get(this.api + '/productionM/')
    
  } 
  getQuantiteVendue() {
    return this.http.get(this.api + '/quantiteVenduM/')
    
  }

  getPhaseVache() {
    return this.http.get<phaseVache[]>(this.api + '/periodeMois/')
      .map(resultat => resultat)
  }
  getStockDisponible() {
    return this.http.get(this.api + '/stockDisponible/')
  }

  getLaitVenteLait() {
    return this.http.get<VenteLait[]>(this.api + '/sommeLaitVendu/')
      .map(resultat => resultat)
  }
}
