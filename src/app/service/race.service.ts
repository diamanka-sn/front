import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  api: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  getNombreRace(){
    return this.http.get(this.api+'/nbrerace/')
  }
}
