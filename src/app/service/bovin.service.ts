import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bovinMois, Bovins, poidsBovin, Santebovin } from '../_models/Bovins';
import { DetailsBovin } from '../_models/DetailsBovin';
import { Observable, of } from 'rxjs';
import {config} from '../_models/config'

@Injectable({
  providedIn: 'root'
})
export class BovinService {
  api: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getBovin() {
    return this.http.get<Bovins[]>(`${config.apiUrl}/bovin/`)
  }
  
  getBovinDetails(idBovin) {
    return this.http.get<DetailsBovin[]>(`${config.apiUrl}/listBovinAvecDetaille/` + idBovin)
  }
  getNombreBovin() {
    return this.http.get(`${config.apiUrl}/nombreBovinMd/`)
  }
  getNombreBovinM() {
    return this.http.get(`${config.apiUrl}/nombreBovinM/`)
  }
  getNombreBovinAchetes() {
    return this.http.get(`${config.apiUrl}/nbreachatbovin/`)
  }

  getNombreVache() {
    return this.http.get(`${config.apiUrl}/nombreVacheM/`)
  }
  getNombreTaureau() {
    return this.http.get(`${config.apiUrl}/nombreTaureauM/`)
  }
  getNombreGenisse() {
    return this.http.get(`${config.apiUrl}/nombreGenisseM/`)
  }
  getNombreVeau() {
    return this.http.get(`${config.apiUrl}/nombreVeauM/`)
  }
  getNombreVelle() {
    return this.http.get(`${config.apiUrl}/nombreVelleM/`)
  }
  getRace() {
    return this.http.get(`${config.apiUrl}/nbrerace/`)
  }

  getSanteBovin(): Observable<Santebovin[]> {
    return this.http.get<Santebovin[]>(`${config.apiUrl}/santeBovin`)
      .map(resultat => resultat)
  }

  getVacheMois(): Observable<bovinMois[]> {
   
    return this.http.get<bovinMois[]>(`${config.apiUrl}/evolutionVache`)
      .map(resultat => resultat)
  }

  getTaureauMois(): Observable<bovinMois[]> {
    return this.http.get<bovinMois[]>(`${config.apiUrl}/evolutionTaureau`)
      .map(resultat => resultat)
  }
  getVelleMois(): Observable<bovinMois[]> {
    return this.http.get<bovinMois[]>(`${config.apiUrl}/nombreVelleMois`)
      .map(resultat => resultat)
  }
  getVeauMois(): Observable<bovinMois[]> {
    return this.http.get<bovinMois[]>(`${config.apiUrl}/nombreVeauMois`)
      .map(resultat => resultat)
  }
  getGenisseMois(): Observable<bovinMois[]> {
    return this.http.get<bovinMois[]>(`${config.apiUrl}/nombreGenisseMois`)
      .map(resultat => resultat)
  }
  getPoidsBovin(idBovin): Observable<poidsBovin[]> {
    return this.http.get<poidsBovin[]>(`${config.apiUrl}/evolutionPoids/` + idBovin)
      .map(resultat => resultat)
  }

  getNombreBovinVendu() {
    return this.http.get(`${config.apiUrl}/nombreBovinVendueM/`)
  }

  
}
