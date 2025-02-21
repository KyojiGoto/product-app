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
      'name': 'Crew Neck T-Shirt',
      'price': 19.90,
      'description': 'A high-quality tee that\'s perfect for layering under other styles or wearing by itself.',
      'image': "/assets/goods_422992_sub13_3x4.jpg",
    },
    {
      'id': 1,
      'name': 'Sweat Pullover Hoodie',
      'price': 59.90,
      'description': 'Supreme comfort with high-quality fabrics and modern designs.',
      'image': "/assets/goods_475378_sub13_3x4.jpg",
    },
    {
      'id': 2,
      'name': 'Cargo Pants',
      'price': 59.90,
      'description': 'Wide tapered cut with a relaxed feel.',
      'image': "/assets/goods_463957_sub14_3x4.jpg",
    },
    {
      'id': 3,
      'name': 'Super Non-Iron Shirts',
      'price': 49.99,
      'description': '100% cotton. Zero ironing.',
      'image': "/assets/cagoods_61_477841_3x4.jpg",
    },
    {
      'id': 4,
      'name': 'Cotton Relaxed Ankle Jeans',
      'price': 39.90,
      'description': 'Comfortable denim for freedom of movement.',
      'image': "/assets/goods_461420_sub13_3x4.jpg",
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
