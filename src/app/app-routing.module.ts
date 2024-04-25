import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , loadChildren: ()=> import('../app/admin/admin.module').then((m)=> m.AdminModule) },
  {path:'Dashbored' , loadChildren: ()=> import('../app/admin/layout/layout.module').then((m)=> m.LayoutModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
