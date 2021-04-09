import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../_models/config'
import { User } from '../_models/User';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }
  getFerme() {
    return this.http.get<User[]>(`${config.apiUrl}/fermier`)
  }

}
