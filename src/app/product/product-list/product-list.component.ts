import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

/**
 * This component displays a list of product cards.
 *
 * @remarks
 * The product objects are provided through the ProductService. 
 * This component handles emitted routing events from product card components.
 */
@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  template: `
    <section class="product-list">
      @for (product of this.productList; track product.id) {
        <app-product-card [product]="product" (viewDetail)="routeToProductDetailView($event)"></app-product-card>
      }
    </section>
  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  router: Router = inject(Router);
  productService: ProductService = inject(ProductService);
  productList: Product[] = []

  constructor() {}

  // Subscribe to the product service when component is initialized
  ngOnInit() {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.productList = data;
    });
  }

  routeToProductDetailView(id: number) {
    this.router.navigate(['products', id]);
  }
}
