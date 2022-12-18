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
  infoBankAccLink = "http://127.0.0.1:8000/api/infoBankAcc/";
  historyTransfersLink = "http://127.0.0.1:8000/api/history";
  changedLink = "http://127.0.0.1:8000/api/change/";
  UserListLink = "http://127.0.0.1:8000/api/userList";

  przelewLink = "http://127.0.0.1:8000/api/transfer/";

  constructor(private http: HttpClient) { }
 

  configUrl = 'assets/config.json';
  register(model: any){
    return this.http.post(this.RegisterLink, model);
  }  
  login(model: any) {
    return this.http.post(this.loginLink, model)
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
  userInfo(model: any){
    return this.http.post(this.infoBankAccLink, model)
  }
  UserList(model: any){
    return this.http.post(this.UserListLink, model)
  }
  changeLink(model:any){
    return this.http.post(this.changedLink, model)
  }  

  
}