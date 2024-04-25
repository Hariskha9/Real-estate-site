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
              icon: 'pi pi-fw pi-microsoft',
               
          },
          {
              label: 'All Properties',
              icon: 'pi pi-fw pi-building'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            
            styleClass: 'absolute bottom-0 col-2 bg-white mt-3 border-top-1 border-300 	',
            label: 'Logout',
            icon: 'pi pi-fw pi-trash'
            }, 
      ];
  }
  
}
