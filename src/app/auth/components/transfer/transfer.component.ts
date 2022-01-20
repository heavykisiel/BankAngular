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
  accounts:string = ''
  accNameNumber:Array<string> = []
  kontoN:string ='';
  ngOnInit(): void {
    this.accounts = localStorage.getItem('accounts') as string;
    var jsoned:Array<any> = JSON.parse(this.accounts);
    if(jsoned !== null){
      jsoned.forEach(element => {
        this.statesSelect.push(element['fields']['accNumber'])
        this.accNameNumber.push(element['fields']['accNumber'], element['fields']['accName'], element['fields']['balance'],element['fields']['waluts']);
        console.log(this.accNameNumber);
      });
  }
  }
   onSubmit(f: NgForm){
      var correctPrzelew = true
      var a1 = f.value.kontoN;
      var a2 = f.value.kwota;
      var a3 = f.value.title;
      var a4 = f.value.KontoO;
      var a5 = localStorage.getItem('token') as string
      console.log(a1,a2,a3,a4);
      var formData = new FormData();
      console.log(formData)
      formData.append('fromBank', a1);
      formData.append('amount', a2);
      formData.append('description', a3);
      formData.append('toBank', a4);
      var token: string ='';
     this.authService.przelew(formData).subscribe(
       (         x: any) => {
          console.log('udało się');
          correctPrzelew = true
         },
       (         err: any) =>{
          console.error('Wystąpił Błąd logowania spróbuj ponownie');
          console.log(err);
          correctPrzelew = false;
         } ,
       );

       window.location.href = '../logged'
     
  }
}
