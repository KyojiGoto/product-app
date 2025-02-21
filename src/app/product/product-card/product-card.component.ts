import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import { Product } from '../product';

/**
 * This component displays a summary of a single product.
 *
 * @remarks
 * Accepts a product object through Input() and emits a viewDetail event through Output() 
 * when the "Learn More" button is clicked. 
 * The parent component should handle routing through the event.
 */
@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  template: `
    <section class="product">
      <h2 class="product-name">{{product.name}}</h2>
      <h3 class="product-price">{{product.price | currency }}</h3>
      <p class="product-description">{{product.description}}</p>
      <button class="product-button primary" (click)="onViewDetail()">Learn More</button>
    </section>
  `,
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!:Product;
  @Output() viewDetail = new EventEmitter<number>();

  /**
   * Emits an event with the current product id.
   * This is used by the parent component (ProductList) to handle routing.
   */
  onViewDetail() {
    this.viewDetail.emit(this.product.id);
  }
}
