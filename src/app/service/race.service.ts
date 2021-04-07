import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../_models/config'


import 'rxjs/add/operator/map'
import { RaceExistant } from '../_models/Race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  api: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  getNombreRace(){
    return this.http.get(`${config.apiUrl}/nbrerace/`)
  }

  getRaceExistant() : Observable<RaceExistant[]>{
    return this.http.get<RaceExistant[]>(`${config.apiUrl}/bovins`)
      .map(resultat =>resultat)
  }
}
