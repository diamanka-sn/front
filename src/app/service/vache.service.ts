import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { periodeVache, phaseVache } from '../_models/Vache';
import { Observable } from 'rxjs';

import { config } from '../_models/config'


@Injectable({
  providedIn: 'root'
})
export class VacheService {

  api: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getPhaseVache(): Observable<phaseVache[]> {
    return this.http.get<phaseVache[]>(`${config.apiUrl}/phaseVache`)
      .map(resultat => resultat)
  }
  getPeriodeVache(): Observable<periodeVache[]> {
    return this.http.get<periodeVache[]>(`${config.apiUrl}/periodeVache`)
    .map(resultat => resultat)
  }
  getPhaseGenisse(): Observable<phaseVache[]> {
    return this.http.get<phaseVache[]>(`${config.apiUrl}/phaseGenisse`)
      .map(resultat => resultat)
  }
}
