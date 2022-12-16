import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  constructor(private authService: AuthService) { }
  statesSelect:Array<string> =[
  ]
  accounts:any = ''
  accNameNumber:Array<string> = []
  kontoN:string ='';
  listofTransaction:Array<string> = []
  history:any =''

  ngOnInit(): void {

    this.accounts = localStorage.getItem('accounts') as string;
    var jsoned:Array<any> = JSON.parse(this.accounts);
    if(jsoned !== null){
      jsoned.forEach(element => {
        this.statesSelect.push(element['accNumber'])
        this.accNameNumber.push(element['accNumber'], element['accName'], element['balance'],element['currency']);
        console.log(this.accNameNumber);
      });
  } 
  

  }
  onSubmit(f: NgForm){
    var a1 = f.value.kontoN;
    var a2 = localStorage.getItem('token') as string;
    var formData = new FormData();
    formData.append('accNumber', a1);
    formData.append('token', a2);
    this.authService.history(formData).subscribe(
      (         x: any) => {
         console.log('udało się');
         console.log(x);
         localStorage.setItem('historyBuff', JSON.stringify(x));
        },
      (         err: any) =>{
         console.error('Wystąpił Błąd wyswietlania historii, spróbuj ponownie');
         console.log(err);
        } ,
      );
      if(localStorage.getItem('historyBuff') !== '' || localStorage.getItem('historyBuff') !== null || localStorage.getItem('historyBuff') != null || localStorage.getItem('historyBuff') != '' ) {
        this.history = localStorage.getItem('historyBuff');
        var jsoned:Array<any> = JSON.parse(this.history)
        this.listofTransaction = []
        console.log(typeof jsoned)
        if(jsoned !== null){
          console.log(jsoned);
          Array.from(jsoned).forEach(element => {
          console.log(element)
          if (element['from_bank_id'] != f.value.kontoN){
            this.listofTransaction.push("from: " + element['from_bank_id'] + "  to :  "+ element['to_bank_id'],"+"+element['amount'] +"  "+ element['currency']);
          }
          else{
            this.listofTransaction.push("from: " + element['from_bank_id'] + "  to :  "+ element['to_bank_id'],"-"+element['amount'] +"  "+ element['currency']);
          }
          
        });
      }
    }


  }


}
