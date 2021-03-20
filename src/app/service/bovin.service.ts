import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bovins, Santebovin } from '../_models/Bovins';
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

  getNombreVache() {
    return this.http.get(this.api + '/api/nbrevache/')
  }
  getRace() {
    return this.http.get(this.api + '/api/nbrerace/')
  }

  getSanteBovin(): Observable<Santebovin[]> {
    return this.http.get<Santebovin[]>(this.api + '/api/santeBovin')
      .map(resultat => resultat)
  }
}
