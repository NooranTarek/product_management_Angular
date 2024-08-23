import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent,
      },
    {
        path: 'products',
        component: ProductsComponent,
      },
];
