import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  columnas = ['id', 'title', 'price', 'description', 'actions'];
  productos: Product[];
  matTable: MatTableDataSource<Product> = new MatTableDataSource([]);

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      productos => {
        this.productos = productos;
        this.matTable.data = this.productos;
      }
    );
  }

  deleteProduct(product: Product, index: number) {
    this.productService.deleteProduct(product.id).subscribe(
      respuesta => {
        if (respuesta) {
          this.productos.splice(index, 1);
          this.matTable = new MatTableDataSource(this.productos);
        }
      }
    );
  }

}
