import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  hajs: Number = 0;
  Currency: string = '';
  username:string = '';
  constructor() { }

  ngOnInit(): void {
    this.hajs =12.12;
    this.Currency ='PLN';
    this.username = 'StaryZbyszka';
  }

}
