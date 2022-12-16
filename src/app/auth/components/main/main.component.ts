import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  
  username: string = ''
  accounts: any
  newBalance: any
  aaa:Array<string> = []
  constructor(private router: Router, private authService: AuthService) { }

  async ngOnInit() {

    
    var formDataToken = new FormData();
    formDataToken.append('token', localStorage.getItem('token') as string);
   
   this.authService.UserBankAcc(formDataToken).subscribe(
     x => console.log(x),
     err => console.error(err),
   );
    var BankAccNumer:any = await this.authService.UserBankAcc(formDataToken).toPromise();
    var bufferforJsonAccounts = JSON.stringify(BankAccNumer);
    var correctJSONrespAccounts = JSON.parse(bufferforJsonAccounts);
    localStorage.setItem('accounts',JSON.stringify(correctJSONrespAccounts));
    if (localStorage.getItem('username') === '' || localStorage.getItem('username') === null || localStorage.getItem('username') == null) {
      this.router.navigate(['login']);
    }
    else {
      this.username = localStorage.getItem('username') as string;
    }
    if(localStorage.getItem('accounts') !== '' || localStorage.getItem('accounts') !== null || localStorage.getItem('accounts') != null || localStorage.getItem('accounts') != '' ) {
      this.accounts = localStorage.getItem('accounts');
      var jsoned:Array<any> = JSON.parse(this.accounts);
      if(jsoned !== null){
      jsoned.forEach(element => {
        if(element['balance'] != localStorage.getItem('newbalance'))
        this.aaa.push(element['accName'] + "   "+ element['accNumber'],element['balance'] +"  "+ element['currency']);
      });
    }
  }
}


}
