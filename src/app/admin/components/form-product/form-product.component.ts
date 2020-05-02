import { MyValidators } from './../../../utils/validator';
import { ProductsService } from './../../../core/services/products/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  idProducto: string;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    // this.idProducto = this.activatedRoute.snapshot.paramMap.get('id'); --> otra forma de obtener el parametro
    this.activatedRoute.params.subscribe((params: Params) => {
      this.idProducto = params.id;
      if (this.idProducto) {
        this.productService.getProduct(this.idProducto).subscribe(product => {
          this.form.patchValue(product);
        });
      }
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      if (this.idProducto) {
        this.productService.updateProduct(product, this.idProducto).subscribe(
          respuesta => {
            this.router.navigate(['./admin/productos']);
          }
        );
      } else {
        this.productService.createProduct(product).subscribe(
          respuesta => {
            this.router.navigate(['./admin/productos']);
          }
        );
      }
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  get price() {
    return this.form.get('price');
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get id() {
    return this.form.get('id');
  }

}
