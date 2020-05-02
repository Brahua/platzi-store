import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/product.model';
import { Observable } from 'rxjs';
import { CartService } from './../../../core/services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  products$: Observable<Product[]>;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.products$ = this.cartService.cart$.pipe(map(products => {
      // console.log(this.agruparProductos(products, 'id'));
      return products;
    }));
  }

  agruparProductos(products: Product[], key: string) {
    const reducer = (result: any, currentValue: Product) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    };
    const productsReduce = products.reduce(reducer, {});
    return productsReduce;
  }



  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
