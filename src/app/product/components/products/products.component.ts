import { ProductsService } from './../../../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';

import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => this.products = products);
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
