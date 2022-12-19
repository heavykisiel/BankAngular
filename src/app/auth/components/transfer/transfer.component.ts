import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.sass']
})
export class TransferComponent implements OnInit {
  

  constructor(private authService: AuthService) { }

  statesSelect:Array<string> =[
  ]
  statesSelectDisplay:Array<string> =[
  ]
  accounts:string = ''
  accNameNumber:Array<string> = []
  kontoN:string ='';
  ngOnInit(): void {
    this.accounts = localStorage.getItem('accounts') as string;
    var jsoned:Array<any> = JSON.parse(this.accounts);
    if(jsoned !== null){
      jsoned.forEach(element => {
        this.statesSelect.push(element['accNumber'] + "  " +element['currency'])
        this.accNameNumber.push(element['accNumber'], element['accName'], element['balance'],element['currency']);
        console.log(this.accNameNumber);
      });
  }
  }
   onSubmit(f: NgForm){
      var correctPrzelew = true
      var a1 = f.value.kontoN.split(" ")[0];
      var a2 = f.value.kwota;
      var a3 = f.value.title;
      var a4 = f.value.KontoO;
      var a5 = localStorage.getItem('token') as string
      console.log(a1,a2,a3,a4);
      var formData = new FormData();
      console.log(formData)
      formData.append('from', a1);
      formData.append('amount', a2);
      formData.append('description', a3);
      formData.append('to', a4);
      formData.append('token', a5)
     this.authService.przelew(formData).subscribe(
       (         x: any) => {
          console.log('udało się');
          correctPrzelew = true
          console.log(x)
          localStorage.setItem('newbalance', x)
         },
       (         err: any) =>{
          console.error('Wystąpił Błąd przelewu spróbuj ponownie');
          console.log(err);
          correctPrzelew = false;
         } ,
       );

       window.location.href = '../logged'
     
  }
}
