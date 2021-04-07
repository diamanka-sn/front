import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../_models/config'
import { moyenPaiement } from '../_models/Facture';



@Injectable({
  providedIn: 'root'
})
export class AchatService {

  constructor(private http: HttpClient) { }

  getNombreAchatBovin() {
    return this.http.get(`${config.apiUrl}/nbreachatbovin`)
  }
  getMoyenPaiement() {
    return this.http.get<moyenPaiement[]>(`${config.apiUrl}/paiementM`)
      .map(resultat => resultat)

  }
}
