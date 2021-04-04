import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from '../_models/config'

@Injectable({
  providedIn: 'root'
})
export class AchatService {

  constructor(private http: HttpClient) { }

  getNombreAchatBovin(){
    return this.http.get(`${config.apiUrl}/nbreachatbovin`)
  }
}
