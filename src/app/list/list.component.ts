import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerService } from '../shared/service/beer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  beers$: Observable<any>;
  ngOnInit(): void {
    this.getBeers()
  }

  //on subscribe car on a mis un observable dans le BeerService
  getBeers(){
    this.beerService.getBeers()
    .subscribe(data => {
      this.beers$ = data;
      console.log(this.beers$);
    })
  }
}
