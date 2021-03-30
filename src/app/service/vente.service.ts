import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vente } from '../_models/Vente';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  api: string = 'http://10.156.93.190:5000';

  constructor(private http: HttpClient) { }

  getVenteLait(annee): Observable<vente[]> {
    return this.http.get<vente[]>(this.api + '/api/chiffreLait/'+annee)
      .map(resultat => resultat)
  }

  getVenteBovin(annee): Observable<vente[]> {
    return this.http.get<vente[]>(this.api + '/api/chiffreLait/'+annee)
      .map(resultat => resultat)
  }
}
