import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        children: [
          {
            path: '',
            loadChildren: '../pages/inicio/inicio.module#InicioPageModule'
          }
        ]
      },
      {
        path: 'contacto',
        children: [
          {
            path: '',
            loadChildren: '../pages/contacto/contacto.module#ContactoPageModule'
          }
        ]
      },
      {
        path: 'acerca',
        children: [
          {
            path: '',
            loadChildren: '../pages/acerca/acerca.module#AcercaPageModule'
          }
        ]
      },
      {
        path: 'galery',
        children: [
          {
            path: '',
            loadChildren: '../pages/galery/galery.module#GaleryPageModule'
          }
        ]
      },
      {
        path: 'hotel',
        children: [
          {
            path: '',
            loadChildren: '../pages/hotel/hotel.module#HotelPageModule'
          }
        ]
      },
      {
        path: 'ver',
        children: [
          {
            path: '',
            loadChildren: '../pages/foto/ver/ver.module#VerPageModule'
          }
        ]
      },
      {
        path: 'add',
        children: [
          {
            path: '',
            loadChildren: '../pages/foto/add/add.module#AddPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
