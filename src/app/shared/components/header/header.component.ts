import { map } from 'rxjs/operators';
import { CartService } from './../../../core/services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;
  // total = 0;

  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$.pipe(map(products => products.length));
    /*this.cartService.cart$.pipe(map(products => products.length))
      .subscribe(total => this.total = total);*/
  }

  ngOnInit() {
  }

}
