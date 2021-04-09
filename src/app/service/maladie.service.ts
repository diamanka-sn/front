import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../_models/config'
import { bovinGueri, bovinMalade, chargeSante, depenseSante, maladie } from '../_models/Maladie';

@Injectable({
  providedIn: 'root'
})
export class MaladieService {

  constructor(private http: HttpClient) { }

  getMaladieFeme(): Observable<maladie[]> {
    return this.http.get<maladie[]>(`${config.apiUrl}/repartitionMaladieM`)
      .map(resultat => resultat)
  }
  getConsultationFeme(): Observable<bovinMalade[]> {
    return this.http.get<bovinMalade[]>(`${config.apiUrl}/BovinMaladeM`)
      .map(resultat => resultat)
  }
  getGueriFeme(): Observable<bovinGueri[]> {
    return this.http.get<bovinGueri[]>(`${config.apiUrl}/BovinGueriM`)
      .map(resultat => resultat)
  }
  getNombreGueri() {
    return this.http.get(`${config.apiUrl}/NombreBovinGueriM`)
  }
  getChargeSante(): Observable<depenseSante[]> {
    return this.http.get<depenseSante[]>(`${config.apiUrl}/listeDepenseSanteM`)
      .map(resultat => resultat)
  }
  
  getCoutSante(): Observable<chargeSante[]> {
    return this.http.get<chargeSante[]>(`${config.apiUrl}/chargeSanteM`)
      
  }
}
