import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
})
export class VerPage implements OnInit {
  public fotoId: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.fotoId = params['id'];
      console.log(this.fotoId);
    });
  }

  ngOnInit() {
  }

  gotoHotel() {
    this.router.navigate(['/hotel'], {
      queryParams: { id: "1" }
    });
  }
}
