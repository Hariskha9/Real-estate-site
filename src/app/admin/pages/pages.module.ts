import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboredComponent } from './dashbored/dashbored.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'', component: DashboredComponent}
]

@NgModule({
  declarations: [
    DashboredComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PagesModule { }
