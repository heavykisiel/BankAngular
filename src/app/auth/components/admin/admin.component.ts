import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService) { }
  searchValue:string =''
  searchValue1:string =''
  searchValue2:string =''
  listofUsers:Array<any> = []
  listofallUsers:Array<string> = []
  UserArray:Array<any>=[]
  async ngOnInit() {

    var formDataToken = new FormData();
    formDataToken.append('token', localStorage.getItem('token') as string);
   
   
    var UserList:any = await this.authService.UserList(formDataToken).toPromise();
    var bufferforJsonAccounts = JSON.stringify(UserList);
    var correctJSONrespAccounts = JSON.parse(bufferforJsonAccounts);
    localStorage.setItem('listofallUsers',correctJSONrespAccounts);
    //this.listofUsers.push(UserList)
    Array.from(UserList).forEach(element=> {
      this.listofUsers.push(
       element
    )})
    
  
  }


  onSubmit(f: string){
    
    while(this.UserArray.length > 0) {
      this.UserArray.pop();
    }
    this.UserArray.push(f)

  }
  onSubmit2(f:string){
    var user = this.UserArray[0]
    console.log(user)
    console.log(f)
    //changeLink
    var formDataToken = new FormData();
    formDataToken.append('token', localStorage.getItem('token') as string)
    formDataToken.append('user_id',user.id)
    formDataToken.append('new_first_name',f)
    var UserList:any = this.authService.changeLink(formDataToken).toPromise();
    window.location.href = '../admin'
    
  }
  onSubmit3(f:string){
    var user = this.UserArray[0]
    console.log(user)
    console.log(f)
    //changeLink
    var formDataToken = new FormData();
    formDataToken.append('token', localStorage.getItem('token') as string)
    formDataToken.append('user_id',user.id)
    formDataToken.append('new_last_name',f)
    var UserList:any = this.authService.changeLink(formDataToken).toPromise();
    window.location.href = '../admin'
  }
  onSubmit4(f:string){
    var user = this.UserArray[0]
    console.log(user)
    console.log(f)
    //changeLink
    var formDataToken = new FormData();
    formDataToken.append('token', localStorage.getItem('token') as string)
    formDataToken.append('user_id',user.id)
    formDataToken.append('new_password',f)
    formDataToken.append('new_password_confirmation',f)
    var UserList:any = this.authService.changeLink(formDataToken).toPromise();
    window.location.href = '../admin'
  }
}
