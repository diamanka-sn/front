import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { chiffreAffaire } from '../_models/Vente';
import {config} from '../_models/config'
import { commandeMensuelle } from '../_models/Commande';
import { depensesMensuelle } from '../_models/Depense';


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
  getNombreCommandeParMois() {
    return this.http.get<commandeMensuelle[]>(`${config.apiUrl}/nombreCommandeParMois/`)
      .map(resultat => resultat)
  }
  getNombreCommandeMoisPasse() {
    return this.http.get<depensesMensuelle[]>(`${config.apiUrl}/nombreCommandeMoisPasee/`)
      .map(resultat => resultat)
  }
  getNombreCommandeMoisCourant() {
    return this.http.get<depensesMensuelle[]>(`${config.apiUrl}/nombreCommandeMoisCourant/`)
      .map(resultat => resultat)
  }



  
}
