import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.get(`${config.apiUrl}/nombreMaladie/`)
  }

  getNombreBovinMort() {
    return this.http.get(`${config.apiUrl}/nombreBovinMortM/`)
  }

  getNombreBovinGuerri() {
    return this.http.get(`${config.apiUrl}/NombreBovinGueriM/`)
  }
}
