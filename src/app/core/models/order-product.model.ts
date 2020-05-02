import { Product } from 'src/app/core/models/product.model';

export interface OrderProduct {
  product?: Product;
  quantity?: number;
  total?: number;
}
