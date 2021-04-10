import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { venteBovin } from '../_models/Bovins';
import { vente, venteLait } from '../_models/Vente';

import { config } from '../_models/config'
import { chiffre } from '../_models/Finance';
import { depensesMensuelle } from '../_models/Depense';


@Injectable({
  providedIn: 'root'
})
export class VenteService {

  api: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getVenteLait(annee): Observable<vente[]> {
    return this.http.get<vente[]>(`${config.apiUrl}/chiffreLait/` + annee)
      .map(resultat => resultat)
  }

  getVenteBovin(annee): Observable<vente[]> {
    return this.http.get<vente[]>(`${config.apiUrl}/chiffreLait/` + annee)
      .map(resultat => resultat)
  }

  getVenteBovinM() {
    return this.http.get<chiffre[]>(`${config.apiUrl}/sommeBovinVendu/`)
      .map(resultat => resultat)
  }


  getVenteLaitMensuelle() {
    return this.http.get<venteLait[]>(`${config.apiUrl}/sommeVenteMensuelleM/`)
  }
  getVenteBovintMensuelle() {
    return this.http.get<venteLait[]>(`${config.apiUrl}/sommeBovinVenduMois/`)
  }
  getVenteLaitMoisCourant() {
    return this.http.get<depensesMensuelle[]>(`${config.apiUrl}/chiffreLaitDuMoisCourant/`)
  } 
  getVenteLaitMoisPasse() {
    return this.http.get<depensesMensuelle[]>(`${config.apiUrl}/chiffreLaitDuMoisPasse/`)
  }


}
