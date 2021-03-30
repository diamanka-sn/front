import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map'
import { RaceExistant } from '../_models/Race';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  api: string = 'http://10.156.93.190:5000/api';
  constructor(private http: HttpClient) { }

  getNombreRace(){
    return this.http.get(this.api+'/nbrerace/')
  }

  getRaceExistant() : Observable<RaceExistant[]>{
    return this.http.get<RaceExistant[]>(this.api+'/bovins')
      .map(resultat =>resultat)
  }
}
