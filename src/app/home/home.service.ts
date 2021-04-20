import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from '../core/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  trendingProducts$ = new Subject<any>();

  constructor(private http: HttpService) { }

  getProductTrending() {
    const url = 'home/trending-products/';

    this.http.get(url).subscribe((res) => {
      if (res && res.success) {
        this.trendingProducts$.next(res.data);
      } else {
        console.log("fail");
      }

    });
  }

}
