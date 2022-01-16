import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  RegisterLink = "https://lorekdev.pl/api/createUser/";
  loginLink = "https://lorekdev.pl/api/login/";
  
  BankAccGetLink = "https://lorekdev.pl/api/bankNumbers/";
  infoBankAcc = "https://lorekdev.pl/api/infoBankAcc/";

  przelewLink = "https://lorekdev.pl/api/przelew/";

  constructor(private http: HttpClient) { }
 

  configUrl = 'assets/config.json';
  register(model: any){
    return this.http.post(this.RegisterLink, model);
  }  
  login(model: any) {
    return this.http.post(this.loginLink, model)
  }
  infoUser(model: any){
    return this.http.post(this.infoBankAcc, model)
  }
  UserBankAcc(model: any){
    return this.http.post(this.BankAccGetLink, model)
  }
  przelew(model: any){
    return this.http.post(this.BankAccGetLink, model)
  }

  
}
