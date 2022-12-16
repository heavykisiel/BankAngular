import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HistoryComponent } from './components/history/history.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { TransferComponent } from './components/transfer/transfer.component';



const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logged', component: MainComponent
  },
  {
    path: 'register',  component: RegisterComponent
  },
  {
    path: 'main', component: IndexComponent
  },
  {
    path: 'logged/transfer', component: TransferComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: 'logged/history', component: HistoryComponent
  },
  {
    path: 'employee', component: EmployeeComponent
  },
  {
    path: 'admin', component: AdminComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
