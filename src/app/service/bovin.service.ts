import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bovinMois, Bovins, Santebovin } from '../_models/Bovins';
import { DetailsBovin } from '../_models/DetailsBovin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BovinService {
  api: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getBovin() {
    return this.http.get<Bovins[]>(this.api + '/api/bovin/')
  }

  getBovinDetails(idBovin) {
    return this.http.get<DetailsBovin[]>(this.api + '/api/listBovinAvecDetaille/' + idBovin)
  }
  getNombreBovin() {
    return this.http.get(this.api + '/api/nbrebovin/')
  }
  getNombreBovinAchetes() {
    return this.http.get(this.api + '/api/nbreachatbovin/')
  }

  getNombreVache() {
    return this.http.get(this.api + '/api/nbrevache/')
  }
  getNombreTaureau() {
    return this.http.get(this.api + '/api/nombreTaureau/')
  }
  getNombreGenisse(){
    return this.http.get(this.api + '/api/nombreGenisse/')
  }
  getNombreVeau(){
    return this.http.get(this.api + '/api/nombreVeau/')
  }
  getNombreVelle(){
    return this.http.get(this.api + '/api/nombreVelle/')
  }
  getRace() {
    return this.http.get(this.api + '/api/nbrerace/')
  }

  getSanteBovin(): Observable<Santebovin[]> {
    return this.http.get<Santebovin[]>(this.api + '/api/santeBovin')
      .map(resultat => resultat)
  }

  getVacheMois():Observable<bovinMois[]>{
    return this.http.get<bovinMois[]>(this.api + '/api/evolutionVache')
    .map(resultat => resultat)
  }

  getTaureauMois():Observable<bovinMois[]>{
    return this.http.get<bovinMois[]>(this.api + '/api/evolutionTaureau')
    .map(resultat => resultat)
  }
  getVelleMois():Observable<bovinMois[]>{
    return this.http.get<bovinMois[]>(this.api + '/api/nombreVelleMois')
    .map(resultat => resultat)
  }
  getVeauMois():Observable<bovinMois[]>{
    return this.http.get<bovinMois[]>(this.api + '/api/nombreVeauMois')
    .map(resultat => resultat)
  }
  getGenisseMois():Observable<bovinMois[]>{
    return this.http.get<bovinMois[]>(this.api + '/api/nombreGenisseMois')
    .map(resultat => resultat)
  }
}
