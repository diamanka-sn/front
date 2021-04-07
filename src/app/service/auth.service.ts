import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from '../_models/config'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient) { }
  isAuth= false;
    getLogin(data) {
        return  this.http.post(`${config.apiUrl}/login/`,data);
      }
}