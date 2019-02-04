import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'galery', loadChildren: './pages/galery/galery.module#GaleryPageModule' },
  { path: 'hotel', loadChildren: './pages/hotel/hotel.module#HotelPageModule' },
  { path: 'add', loadChildren: './pages/foto/add/add.module#AddPageModule' },
  { path: 'ver', loadChildren: './pages/foto/ver/ver.module#VerPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
