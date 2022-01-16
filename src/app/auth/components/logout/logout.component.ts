import { NgLocalization } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    localStorage.clear();
    window.location.href = '../login' //musi działać bez routingu
    
  }
 

}
