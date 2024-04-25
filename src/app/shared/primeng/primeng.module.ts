import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MenuModule,
    SlideMenuModule
  ],
  exports:[
    CheckboxModule,
    ButtonModule  ,
    InputTextModule,
    PasswordModule,
    MenuModule,
    SlideMenuModule

  ]
})
export class PrimengModule { }
