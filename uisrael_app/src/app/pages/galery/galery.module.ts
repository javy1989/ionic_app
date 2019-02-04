import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GaleryPage } from './galery.page';
import { HotelService } from 'src/app/services/hotel.service';

const routes: Routes = [
  {
    path: '',
    component: GaleryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GaleryPage],
  providers:[HotelService]
})
export class GaleryPageModule {}
