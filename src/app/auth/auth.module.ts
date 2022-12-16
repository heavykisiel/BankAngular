import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HistoryComponent } from './components/history/history.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    RegisterComponent,
    IndexComponent,
    TransferComponent,
    LogoutComponent,
    HistoryComponent,
    EmployeeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    TransferComponent

    
  ]
})
export class AuthModule { }
