import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { alimentationJour, stock, stockAliment, type } from '../_models/Aliment';

@Injectable({
  providedIn: 'root'
})
export class AlimentationService {
  api: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getTypeAliment() {
    return this.http.get<type[]>(this.api + '/typeAliment/')
      .map(resultat => resultat)
  }

  getQuantiteStock() {
    return this.http.get<stock[]>(this.api + '/quantiteAchetes/')
      .map(resultat => resultat)
  }

  getQuantiteConsommees() {
    return this.http.get<stock[]>(this.api + '/quantiteConsommes/')
      .map(resultat => resultat)
  }
  getStockAliment() {
    return this.http.get<stockAliment[]>(this.api + '/stock/')
      .map(resultat => resultat)
  }

  getConsommationMois() {
    return this.http.get(this.api + '/consommationMois/')
      .map(resultat => resultat)
  }

  getChargeAlimentation() {
    return this.http.get(this.api + '/chargeAlimentation/')
      .map(resultat => resultat)
  }

  getAlimentationDuJour() {
    return this.http.get<alimentationJour[]>(this.api + '/listeAlimentationJour/')
      .map(resultat => resultat)

  }

}
