import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../_models/config';
import { aliment } from '../_models/Rapport';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  api: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }
  getDetailAliment(dateDebut,dateFin) {
    return this.http.get<aliment[]>(`${config.apiUrl}/AlimentAcheterPeriode/` + dateDebut+'/'+dateFin)
  }
}
