import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

    
    this.authService.register(f.value).subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error(err),
    );
    
    console.log(f.value);
    console.log(f.valid);
   
    
   
    
  }

}
