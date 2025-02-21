import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  template: `
    @if (product == null) {
      <p>Product not found</p>
    } 
    @else {
      <article>
        <section class="product-description">
          <h2 class="product-heading">{{ product.name }}</h2>
          <h3 class="product-price">{{ product.price | currency }}</h3>
          <p class="product-description">{{ product.description }}</p>
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

  ngOnInit() {
    const productId = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(productId).subscribe((data: Product | undefined) => {
      this.product = data;
    });
  }
}
