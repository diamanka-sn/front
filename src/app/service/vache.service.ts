import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { periodeVache, phaseVache } from '../_models/Vache';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacheService {

  api: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getPhaseVache(): Observable<phaseVache[]> {
    return this.http.get<phaseVache[]>(this.api + '/api/phaseVache')
      .map(resultat => resultat)
  }
  getPeriodeVache(): Observable<periodeVache[]> {
    return this.http.get<periodeVache[]>(this.api + '/api/periodeVache')
    .map(resultat => resultat)
  }
}
