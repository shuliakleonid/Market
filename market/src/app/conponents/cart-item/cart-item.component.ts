import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() product: Product | undefined;

  @Output()
  changeQuantity = new EventEmitter();

  MINUS = '-';

  PLUS = '+';

  totalCountProduct(mark: string):void {
    const data:{ [key: string]: () => number } = {
      '-': () => this.product!.quantityCart -= 1,
      '+': () => this.product!.quantityCart += 1,
    };
    data[mark]();
    this.changeQuantity.emit(this.product);
  }
}
