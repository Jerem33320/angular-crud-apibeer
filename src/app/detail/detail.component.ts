import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BeerService } from '../shared/service/beer.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:number;
  beer$;

  constructor(private route: ActivatedRoute, private beerService: BeerService) {
    this.route.params
    .subscribe( params => {
      this.id = params.id;
      this.getBeer(this.id)
    })
   }

  ngOnInit() {
    this.getBeer(this.id);
  }

  getBeer(i){
    // this.beer = this.beerService.getBeer(i);
    this.beerService.getBeer(i)
    .subscribe(data => {
      this.beer$ = data[0];
      console.log(this.beer$);
    })
  }
}