import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  i = 0;

  authUrl = "https://lorekdev.pl/api/createUser/";
  loginLink = "https://lorekdev.pl/api/login/";
  tokenGetLink = "https://lorekdev.pl/api/api-token-auth/";
  BankAccGetLink = "https://lorekdev.pl/api/bankNumbers/";
  infoBankAcc = "https://lorekdev.pl/api/infoBankAcc/";


  constructor(private http: HttpClient) { }
 
  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
          return true;
      } else {
        confirmPasswordControl.setErrors(null);
          return null;
      }
    };
  }

  configUrl = 'assets/config.json';
  register(model: any){
    return this.http.post(this.authUrl, model);
  }  
  login(model: any) {
    return this.http.post(this.loginLink, model)
  }
  getToken(model: FormData, head: any) {
    return this.http.post(this.tokenGetLink + '?username=' + model.get('username') + '&password=' + model.get('password'),{'headers': head} )
  }
  infoUser(model: any){
    return this.http.post(this.infoBankAcc, model)
  }
  UserBankAcc(model: any){
    return this.http.post(this.BankAccGetLink, model)
  }

  
}
