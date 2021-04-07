import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chiffreAffaire } from '../_models/Vente';
import {config} from '../_models/config'


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getNombreCommande() {
    return this.http.get(`${config.apiUrl}/nombreCommande/`)
  }

  getChiffreAffaireLait() {
    return this.http.get<chiffreAffaire[]>(`${config.apiUrl}/chiffreAffaireLait/`)
      .map(resultat => resultat)
  }
  getChiffreAffaireBovin() {
    return this.http.get<chiffreAffaire[]>(`${config.apiUrl}/chiffreAffaireBovin/`)
      .map(resultat => resultat)
  }

  getNombreCommandeBovin() {
    return this.http.get(`${config.apiUrl}/nombreCommandeBovin/`)
      .map(resultat => resultat)
  }
  getNombreCommandeLait() {
    return this.http.get(`${config.apiUrl}/nombreCommandeLait/`)
      .map(resultat => resultat)
  }
}
