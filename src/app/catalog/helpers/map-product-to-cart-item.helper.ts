import { CartItem } from 'src/app/shopping-cart/cart-item';
import { Product } from '../product';

export function mapProductToCartItem(product: Product): CartItem {
  const { imageUrl, name, price } = product;

  return { imageUrl, name, price };
}
