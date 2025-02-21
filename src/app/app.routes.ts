import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';


export const routes: Routes = [
    {
        path: 'products',
        component: ProductListComponent,
        title: 'Products Page',
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent,
        title: 'Product Details Page',
    },
    // Redirects invalid paths back to the list view
    {
        path: '**',
        redirectTo: 'products',
    },
];
