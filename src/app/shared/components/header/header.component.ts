import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  username:string ='';
  logoutAvailable:boolean = false

  ngOnInit(): void {
    this.username = localStorage.getItem('username') as string;
    if(localStorage.getItem('username') === '' || localStorage.getItem('username') === null || localStorage.getItem('username') == null || localStorage.getItem('username') == ''){
        this.logoutAvailable = false;
        
        this.router.navigate(['login']);
    }
    else{
      this.logoutAvailable = true;
    }
  }
  

}
