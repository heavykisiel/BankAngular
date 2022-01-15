import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
