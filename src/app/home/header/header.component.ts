import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
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

  showMenu(evt: Event, elm: string): void {
    evt.preventDefault();
    evt.stopPropagation();
    let navElm = document.querySelector(elm);

    navElm?.classList.toggle('active');
    console.log(navElm);

  }

  toggleDisplayChildrenMenu(evt, elm: any): void {
    evt.preventDefault();
    evt.stopPropagation();

    var target = evt.target;
    var parent = target.parentElement.parentElement;
    parent.classList.toggle('active');
  }

}
