import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listeDepense } from '../_models/Depense';

@Injectable({
  providedIn: 'root'
})
export class DepensesService {
  api: string = 'http://10.156.93.190:5000/api';

  constructor(private http: HttpClient) { }

  getAlldepense() {
    return this.http.get<listeDepense[]>(this.api + '/autreDepense/')
  }
}
