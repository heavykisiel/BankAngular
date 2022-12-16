
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpHeaders } from '@angular/common/http';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(f: NgForm){
    var correctLogin = true
    var a1 = f.value.username;
    var a2 = f.value.password;
    var formData = new FormData();
    console.log(formData)
    formData.append('login', a1);
    formData.append('password', a2);
    var token: string ='';
   this.authService.login(formData).subscribe(
       x => {
        console.log('udało się');
        correctLogin = true
       },
       err =>{
        console.error('Wystąpił Błąd logowania spróbuj ponownie');
        console.log(err);
        correctLogin = false;
       } ,
     );
     if(correctLogin){
     var tokenAchieved = await this.authService.login(formData).toPromise();
     var bufferforJson = JSON.stringify(tokenAchieved);
     var correctJSONrespLogin = JSON.parse(bufferforJson);
     console.log(correctJSONrespLogin.User);
     console.log(correctJSONrespLogin.token);

     var username = correctJSONrespLogin.User.userName;
     var resposeToken = correctJSONrespLogin.token;
     var firstName = correctJSONrespLogin.User.first_name;
     var lastName = correctJSONrespLogin.User.last_name;
     var permission = correctJSONrespLogin.User.permissions;

     localStorage.setItem('token',resposeToken);
     localStorage.setItem('username',username);
     localStorage.setItem('first_name',firstName);
     localStorage.setItem('last_name',lastName);
     localStorage.setItem('permissions', permission);
    
     
     var formDataToken = new FormData();
     formDataToken.append('token', resposeToken);
     console.log(formDataToken);
    
    this.authService.UserBankAcc(formDataToken).subscribe(
      x => console.log(x),
      err => console.error(err),
    );
     var BankAccNumer:any = await this.authService.UserBankAcc(formDataToken).toPromise();
     var bufferforJsonAccounts = JSON.stringify(BankAccNumer);
     var correctJSONrespAccounts = JSON.parse(bufferforJsonAccounts);
     localStorage.setItem('accounts',JSON.stringify(correctJSONrespAccounts));
     if (localStorage.getItem('permissions') == '0'){
        window.location.href = '../logged'
     }
     if (localStorage.getItem('permissions') == '1'){
        window.location.href = '../employee'
     }
     if (localStorage.getItem('permissions') == '2'){
      window.location.href = '../admin'
    }
     
     }
    else{
      console.log('tryagain')
    }

    console.log(f.value);
   
    
  }

}
