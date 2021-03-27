import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { phaseVache, productionLait, productionTotale } from '../_models/Production';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getProductionLait(): Observable<productionLait[]> {
    return this.http.get<productionLait[]>(this.api + '/production/')
      .map(resultat => resultat)
  }

  getQuantiteProduite(): Observable<productionTotale[]> {
    return this.http.get<productionTotale[]>(this.api + '/quantiteLaitProduite/')
      .map(resultat => resultat)
  }

  getPhaseVache() {
    return this.http.get<phaseVache[]>(this.api + '/periodeMois/')
      .map(resultat => resultat)
  }
  getStockDisponible() {
    return this.http.get(this.api + '/stockDisponible/')
  }
}
