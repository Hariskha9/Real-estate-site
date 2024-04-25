import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  items: MenuItem[] =[];

constructor (){}

  ngOnInit() {
      this.items = [
          {
              label: 'Dashbored',
              icon: 'pi pi-fw pi-plus',
               
          },
          {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            
            styleClass: 'absolute bottom-0 w-full bg-white mt-3 border-top-1 border-300	',
            label: 'Logout',
            icon: 'pi pi-fw pi-trash'
            }, 
      ];
  }
  
}
