import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  
  username: string = ''
  accounts: any
  aaa:Array<string> = []
  constructor(private router: Router) { }

  ngOnInit(): void {
    
    console.log(localStorage.getItem('username'));
    if (localStorage.getItem('username') === '' || localStorage.getItem('username') === null || localStorage.getItem('username') == null) {
      this.router.navigate(['login']);
    }
    else {
      this.username = localStorage.getItem('username') as string;
    }
    if(localStorage.getItem('accounts') !== '' || localStorage.getItem('accounts') !== null || localStorage.getItem('accounts') != null || localStorage.getItem('accounts') != '') {
      this.accounts = localStorage.getItem('accounts');
      var jsoned:Array<any> = JSON.parse(this.accounts);
      if(jsoned !== null){
      jsoned.forEach(element => {
        this.aaa.push(element['fields']['accName'] + "   "+ element['fields']['accNumber'],element['fields']['balance'] +"  "+ element['fields']['waluts'] );
      });
    }
  }
  }

}
