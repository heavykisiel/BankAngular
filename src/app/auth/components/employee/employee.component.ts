import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  constructor(private authService: AuthService) { }
  UserInfo:Array<any> = [];
  userInfoOutput:Array<string> = [];
  login:string = '';
  ngOnInit(): void {
  }
  onSubmit(f: NgForm){
    var a1 = f.value.login as string;
    var a2 = localStorage.getItem('token') as string;
    this.userInfoOutput = [];
    var formData = new FormData();
    formData.append('userName', a1);
    formData.append('token', a2);
    this.authService.userInfo(formData).subscribe(
      (         x: any) => {
         console.log('udało się');
         console.log(x);
         this.UserInfo = x
        },
      (         err: any) =>{
         console.error('Wystąpił Błąd wyswietlania historii, spróbuj ponownie');
         console.log(err);
        } ,
      );
      Array.from(this.UserInfo).forEach(element => {
        this.userInfoOutput.push(
          "accName: " + element.accName,
          "accNumber: "+ element.accNumber,
          "balance: " + element.balance,
          "currency:" + element.currency,
          "created_at: " + element.created_at,
          "updated_at: " + element.updated_at,
          "id: " + element.id,
          "user_id: "+element.user_id
      )}
        
  )}

}
