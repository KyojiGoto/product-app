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
  protected productList: Product[] = [
    {
      'id': 0,
      'name': 'Test',
      'price': 10.99,
      'description': 'Test',
    },
    {
      'id': 1,
      'name': 'Test1',
      'price': 11.99,
      'description': 'Test1',
    },
    {
      'id': 2,
      'name': 'Test2',
      'price': 12.99,
      'description': 'Test2',
    },
    {
      'id': 3,
      'name': 'Test3',
      'price': 13.99,
      'description': 'Test3',
    },
    {
      'id': 4,
      'name': 'Test4',
      'price': 14.99,
      'description': 'Test4',
    },
  ];

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
