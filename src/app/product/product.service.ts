import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';

/**
 * This service fetches product data.
 *
 * @remarks
 * This service uses RxJS Observables to simulate asynchronous data fetching with hardcoded data.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected productList: Product[] = [];

  constructor() { }
  
  /**
   * Fetches all product objects.
   *
   * @returns An Observable that emits an array of product.
   */
  getAllProducts(): Observable<Product[]> {
    return of(this.productList);
  }

  /**
   * Fetches the product object by id.
   *
   * @param id - The id of the product.
   * @returns An Observable that emits the product if found, otherwise undefined.
   */
  getProductById(id: number): Observable<Product | undefined> {
    const product = this.productList.find(product => product.id === id);
    return of(product);
  }
}
