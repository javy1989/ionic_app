import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-galery',
  templateUrl: './galery.page.html',
  styleUrls: ['./galery.page.scss'],
})
export class GaleryPage implements OnInit {
  public usuarios: User[] = [];

  constructor(private router: Router, private hotelService: HotelService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.hotelService.recuperarHoteles().subscribe(data => this.usuarios = data);
  }

  gotoHotel(hotelid) {
    this.router.navigate(['/hotel'], {
      queryParams: { id: hotelid }
    });
  }
  onBackGaleryHome() {
    this.router.navigate(['/galery']);
  }
}
