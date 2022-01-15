
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import * as jwt from 'jsonwebtoken';
import { Subscription } from 'rxjs';
import { Token } from '@angular/compiler';
import { firstValueFrom} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async onSubmit(f: NgForm){
    // http://lorek.dev/api/api-token-auth/?username=admin&password=admin <-- mj link
    // http://lorek.dev/api/api-token-auth/?username=admin&password=admin <- twój link
    
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
    var as = this.authService.login(formData).subscribe(
       x => {
        token = x.toString();
        console.log(token);
       },
       err => console.error(err),
     );

     
     var tokenAchieved = await this.authService.login(formData).toPromise();

     console.log(tokenAchieved);
     tokenAchieved = tokenAchieved as string
     var tokenString: string = tokenAchieved.toString();
     var formDataToken = new FormData();
     console.log(tokenString.toString())
     formDataToken.append('token', tokenString.toString());
     console.log(formDataToken);
    
    this.authService.UserBankAcc(formDataToken).subscribe(
      x => console.log(x),
      err => console.error(err),
    );
    var BankAccNumer:any = await this.authService.UserBankAcc(formDataToken).toPromise();
    console.log(BankAccNumer);
    var bankacc: string=  BankAccNumer["NumbersAccBank"];
    //bankaccnumer console.log(bankacc[0])
    var username: string=  BankAccNumer["username"];
    var user_id: string=  BankAccNumer["id"];
    console.log(username,user_id)


    var formDataInfo = new FormData();
    formDataInfo.append('bankNumber', bankacc);
    formDataInfo.append('token', tokenString);
    
    this.authService.infoUser(formDataInfo).subscribe(
      x => console.log(x),
      err => console.error(err),
    );
   
    console.log(f.value);
   
    
  }

}
