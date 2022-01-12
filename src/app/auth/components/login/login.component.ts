
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){

    var a1 = f.value.username;
    var a2 = f.value.password;
    var formData = new FormData()
    formData.append('username', a1);
    formData.append('password', a2);
    this.authService.login(formData).subscribe(
      x => console.log(x),
      err => console.error(err),
    );
    
    console.log(f.value);
    console.log(f.valid);
   
    
  }

}
