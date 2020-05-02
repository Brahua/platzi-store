import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

import { Product } from './../../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return this.httpClient.get<Product[]>(`${environment.urlApi}/products`);
  }

  getProduct(id: string) {
    return this.httpClient.get<Product>(`${environment.urlApi}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.httpClient.post(`${environment.urlApi}/products`, product);
  }

  updateProduct(product: Partial<Product>, id: string) {
    return this.httpClient.put(`${environment.urlApi}/products/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.httpClient.delete(`${environment.urlApi}/products/${id}`);
  }
}
