import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes =[
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forget-password', component:ForgetPasswordComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PrimengModule,
  ]
})
export class AuthModule { }
