import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BovinService {
  api: string = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getBovin() {
    return this.http.get(this.api + '/api/bovin/')
  }

  getNombreBovin() {
    return this.http.get(this.api + '/api/nbrebovin/')
  }

  getNombreVache() {
    return this.http.get(this.api + '/api/nbrevache/')
  }
  getRace() {
    return this.http.get(this.api + '/api/nbrerace/')
  }
}
