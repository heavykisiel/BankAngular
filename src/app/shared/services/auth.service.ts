import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  RegisterLink = "http://127.0.0.1:8000/api/register";
  #loginLink = "https://lorekdev.pl/api/login/";
  loginLink = "http://127.0.0.1:8000/api/login";
  BankAccGetLink = "http://127.0.0.1:8000/api/bankNumbers/";
  infoBankAcc = "https://lorekdev.pl/api/infoBankAcc/";
  historyTransfersLink = "http://127.0.0.1:8000/api/history";

  przelewLink = "http://127.0.0.1:8000/api/transfer/";

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
    return this.http.post(this.przelewLink, model)
  }
  history(model: any){
    return this.http.post(this.historyTransfersLink, model)
  }
  

  
}
