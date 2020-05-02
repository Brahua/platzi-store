import { OrderProduct } from './../../../core/models/order-product.model';
import { Product } from 'src/app/core/models/product.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupProducts'
})
export class GroupProductsPipe implements PipeTransform {

  /*transform(value: Product[], key: string): OrderProduct[] {
    const reducer = (result: any, currentValue: Product) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    };
    const productsReduce = value.reduce(reducer, {});

    const orderProducts: OrderProduct[] = [];

    for (const k in productsReduce) {
      if (productsReduce.hasOwnProperty(k)) {
        const product: Product = productsReduce[k][0];
        const quantity = productsReduce[k].length;
        const total = product.price * quantity;

        const orderProduct: OrderProduct = { product, quantity, total };
        orderProducts.push(orderProduct);
      }
    }

    return orderProducts;
  }*/

  /*transform(value: Product[]): OrderProduct[] {
    const orderProducts: OrderProduct[] = [];

    value.forEach(product => {
      let orderProduct: OrderProduct = orderProducts.find(op => op.product.id === product.id);
      if (orderProduct) {
        orderProduct.quantity++;
        orderProduct.total = orderProduct.product.price * orderProduct.quantity;
      } else {
        orderProduct = { product, quantity: 1, total: product.price };
        orderProducts.push(orderProduct);
      }
    });

    return orderProducts;
  }*/

  transform(value: Product[]): OrderProduct[] {
    const orderProducts: OrderProduct[] = [];

    value.forEach(product => {
      console.log(product)
      const quantity = value.reduce((acum, element) => (product.id === element.id) ? acum + 1 : acum, 0);
      console.log(quantity)
      if (!orderProducts.some(({ product: { id } }) => id === product.id)) {
        console.log('entre', orderProducts);
        orderProducts.push({ product, quantity });
      }
    });

    return orderProducts;
  }


}
