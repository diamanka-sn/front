import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';

import * as jwt_decode from "jwt-decode"
import { AuthenticationService } from '../../service/auth.service';
import { User } from '../../_models/User';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
// extends NbLoginComponent
export class NgxLoginComponent implements OnInit {
  token: any;
  userData: any;
  showMessages: any;
  strategy: string;
  errors: string;
  messages: string;
  statut:any;
  user = new User()
 
  constructor(private auth: AuthenticationService, private router: Router) { }
  ngOnInit(): void {
    // this.token = localStorage.getItem('token');
  }

  isAuth = false;
  SeConnecter() {
    this.auth.getLogin(this.user).subscribe(res => {
      this.userData = res;
      this.statut = this.userData.status
      if (this.statut == "ok" && this.userData.profile == "admin") {
        this.isAuth = true
        this.messages = "connexion reussie...patientez"
        console.log(this.userData)
        this.router.navigate(['pages/dashboard']);
      } if (this.statut == 401) {
        console.log(this.statut)
        this.isAuth = false;
        this.messages= "Nom d'utilisateur ou le mot de passe est incorrecte"
      }
      console.log(this.userData)
    

    })
  }

  // SeConnecter(){
  //   this.auth.getLogin(this.user).then(
  //     (res) => {
  //       this.userData = res
  //       console.log(this.userData)
  //       // console.log(this.user)
  //       this.authStatus = this.auth.isAuth;
  //     })
  // }
}