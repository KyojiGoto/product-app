import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

/**
 * This component displays a product object's details.
 *
 * @remarks
 * The product object is provided through the ProductService.
 * This component uses the current route to get the product id.
 */
@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  template: `
    @if (product == null) {
      <p>Product not found</p>
    } 
    @else {
      <article class='product-card'>
        <section class='product-content'>
          <div class='product-image-container'>
            <img class='product-image' [src]='product.image' alt='Image of {{product.name}}'>
          </div>
          <div class='product-info'>
            <h2 class='product-heading'>{{ product.name }}</h2>
            <h3 class='product-price'>{{ product.price | currency }}</h3>
            <p class='product-description'>{{ product.description }}</p>
          </div>
        </section>
      </article>
    }
  `,
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  product: Product | undefined;

  /** 
   * Subscribe to the product service when component is initialized
   * Extracts the id from the current route
   */
  ngOnInit() {
    const productId = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(productId).subscribe((data: Product | undefined) => {
      this.product = data;
    });
  }
}
