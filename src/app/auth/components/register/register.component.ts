import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  
  ngOnInit(): void {
  }
  static readonly myObservable = of(1, 2, 3);
  
  onSubmit(f: NgForm){


    var a1 = f.value.username;
    var a2 = f.value.password;
    var a3 = f.value.FirstName;
    var a4 = f.value.LastName;
    var a5 = f.value.email;
    var formData = new FormData();
    console.log(formData)
    formData.append('username', a1);
    formData.append('password', a2);
    
    
    this.authService.register(formData).subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error(err),
    );
    
    console.log(f.value);
   
    
   
    
  }

}
