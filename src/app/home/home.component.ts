import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  trendingProducts: any;
  subscription = new Subscription();

  constructor(private homeService: HomeService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.homeService.getProductTrending();
    this.subscription.add(
      this.homeService.trendingProducts$.subscribe((trendingProducts) => {
        this.trendingProducts = trendingProducts;
      })
    );
  }

}
