import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

const routes: Routes =[
  {path:'', component: BodyComponent , children: [
    { path: '', redirectTo: 'Dashbord', pathMatch: 'prefix' },
    {path:'Dashbord', loadChildren:()=> import('../pages/pages.module').then((m)=> m.PagesModule)}
  ]},
 
]


@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    SidemenuComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PrimengModule
  ]
})
export class LayoutModule { }
