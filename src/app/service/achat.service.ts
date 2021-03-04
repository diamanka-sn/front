import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchatService {
  api: string = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  getNombreAchatBovin(){
    return this.http.get(this.api+'/api/nbreachatbovin/')
  }
}
