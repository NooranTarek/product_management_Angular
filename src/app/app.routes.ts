import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
      },
    {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'product-details/:id',
        component: ProductDetailsComponent,
      },
];
