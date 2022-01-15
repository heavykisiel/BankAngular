import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ColumnTwoComponent } from './layouts/column-two/column-two.component'; 
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    ColumnOneComponent,
    HeaderComponent,
    ColumnTwoComponent,
    FooterComponent
  

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
    
  ],
  exports: [
    ColumnOneComponent,
    ColumnTwoComponent
   
  ]
})
export class SharedModule { }
