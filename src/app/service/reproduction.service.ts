import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../_models/config'


@Injectable({
  providedIn: 'root'
})
export class ReproductionService {

  constructor(private http: HttpClient) { }

  getNombreVeau() {
    return this.http.get(`${config.apiUrl}/nombreVeauVivantM/`)
  }

  getNombreVelle() {
    return this.http.get(`${config.apiUrl}/nombreVelleVivantM/`)
  }

  getNombreGenisse(){
    return this.http.get(`${config.apiUrl}/nombreGenisseVivantM/`)
  }
}
