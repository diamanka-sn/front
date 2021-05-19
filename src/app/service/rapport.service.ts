import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../_models/config';
import { aliment, autre } from '../_models/Rapport';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  api: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }
  getDetailAliment(dateDebut, dateFin) {
    return this.http.get<aliment[]>(`${config.apiUrl}/AlimentAcheterPeriode/` + dateDebut + '/' + dateFin)
  }

  getDetailBovin(dateDebut, dateFin) {
    return this.http.get<aliment[]>(`${config.apiUrl}/BovinAcheterPeriode/` + dateDebut + '/' + dateFin)
  }
  getDetaiAutreDepense(dateDebut, dateFin) {
    return this.http.get<autre[]>(`${config.apiUrl}/autreDepensesPeriode/` + dateDebut + '/' + dateFin)
  }

}
