import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [
    ColumnOneComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
    
  ],
  exports: [
    ColumnOneComponent
   
  ]
})
export class SharedModule { }
