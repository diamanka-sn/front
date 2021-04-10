import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../_models/config'
import { achatBovin } from '../_models/Depense';
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

  getNombreTransaction() {
    return this.http.get(`${config.apiUrl}/nombreFacture`)
  }
  getAchatBovinM() {
    return this.http.get<achatBovin[]>(`${config.apiUrl}/achatBovinM`)


  }
}
