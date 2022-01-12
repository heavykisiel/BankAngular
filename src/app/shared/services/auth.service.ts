import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "https://lorekdev.pl/polls/api/account/";
  pepege = "https://lorekdev.pl/polls/api/createacc/";

  constructor(private http: HttpClient) { }


  configUrl = 'assets/config.json';
  register(model: any){
    return this.http.get(this.authUrl);

  }  
  login(model: any) {
    return this.http.post(this.pepege, model)
  }
}
