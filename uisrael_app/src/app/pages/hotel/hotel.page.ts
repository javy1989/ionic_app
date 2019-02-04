import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {
  public hotelId: number;
  public user: User;
  constructor(private route: ActivatedRoute, private router: Router, private hotelService: HotelService) {
    this.route.queryParams.subscribe(params => {
      this.hotelId = params['id'];
    });
    console.log(this.hotelId);
    this.user = new User();
    this.getHotelId();
  }
  ngOnInit() {
  }

  getHotelId() {
    this.hotelService.recuperarHotelPorId(this.hotelId).subscribe(data => this.user = data);
  }
  gotoGalery() {
    this.router.navigate(['tabs/galery']);
  }

  gotoFoto(foto) {
    this.router.navigate(['/ver'], {
      queryParams: { id: foto }
    });
  }

  gotoAdd() {
    this.router.navigate(['/add']);
  }


}
