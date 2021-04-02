import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chiffreAffaire } from '../_models/Vente';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getNombreCommande() {
    return this.http.get(this.api + '/nombreCommande/')
  }

  getChiffreAffaireLait() {
    return this.http.get<chiffreAffaire[]>(this.api + '/chiffreAffaireLait/')
      .map(resultat => resultat)
  }
  getChiffreAffaireBovin() {
    return this.http.get<chiffreAffaire[]>(this.api + '/chiffreAffaireBovin/')
      .map(resultat => resultat)
  }

  getNombreCommandeBovin() {
    return this.http.get(this.api + '/nombreCommandeBovin/')
      .map(resultat => resultat)
  }
  getNombreCommandeLait() {
    return this.http.get(this.api + '/nombreCommandeLait/')
      .map(resultat => resultat)
  }
}
