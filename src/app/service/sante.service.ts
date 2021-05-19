import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listeSante } from '../_models/Bovins';
import { config } from '../_models/config'

@Injectable({
  providedIn: 'root'
})
export class SanteService {

  constructor(private http: HttpClient) { }

  getNombreMaldie() {
    return this.http.get(`${config.apiUrl}/nombreMaladie/`)
  }

  getNombreBovinMalade() {
    return this.http.get(`${config.apiUrl}/nombreBovinMaladeM/`)
  }

  getNombreBovinMort() {
    return this.http.get(`${config.apiUrl}/nombreBovinMortM/`)
  }

  getNombreBovinGuerri() {
    return this.http.get(`${config.apiUrl}/NombreBovinGueriM/`)
  }

  getListeBovinMalade() {
    return this.http.get<listeSante[]>(`${config.apiUrl}/ListeBovinMaladeM/`)
      .map(resultat => resultat)
  }
}
