
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
    // http://lorek.dev/api/api-token-auth/?username=admin&password=admin <-- mj link
    // http://lorek.dev/api/api-token-auth/?username=admin&password=admin <- twój link
    var correctLogin = true
    var a1 = f.value.username;
    var a2 = f.value.password;
    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('username','admin')
      .set('passowrd','admin');
    var formData = new FormData();
    console.log(formData)
    formData.append('username', a1);
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
     
     console.log(correctJSONrespLogin[0]);
     console.log(correctJSONrespLogin[1]);
     var username = correctJSONrespLogin[0]['fields']['username'];
     var resposeToken = correctJSONrespLogin[1]['pk'];
     var firstName = correctJSONrespLogin[0]['fields']['first_name'];
     var firstName = correctJSONrespLogin[0]['fields']['last_name'];
     localStorage.setItem('token',resposeToken);
     localStorage.setItem('username',username);
     localStorage.setItem('first_name',firstName);
     localStorage.setItem('last_name',firstName);
    
     
     var formDataToken = new FormData();
     formDataToken.append('token', resposeToken.toString());
     console.log(formDataToken);
    
    this.authService.UserBankAcc(formDataToken).subscribe(
      x => console.log(x),
      err => console.error(err),
    );
     var BankAccNumer:any = await this.authService.UserBankAcc(formDataToken).toPromise();
     var bufferforJsonAccounts = JSON.stringify(BankAccNumer);
     var correctJSONrespAccounts = JSON.parse(bufferforJsonAccounts);
     localStorage.setItem('accounts',JSON.stringify(correctJSONrespAccounts));
     window.location.href = '../logged'
     //this.router.navigate(['logged']); musi tak działać bez routingu
    }
    else{
      console.log('tryagain')
    }
    // console.log(BankAccNumer);
    // var bankacc: string=  BankAccNumer["NumbersAccBank"];
    // //bankaccnumer console.log(bankacc[0])
    // var username: string=  BankAccNumer["username"];
    // var user_id: string=  BankAccNumer["id"];
    // console.log(username,user_id)
   
    console.log(f.value);
   
    
  }

}
