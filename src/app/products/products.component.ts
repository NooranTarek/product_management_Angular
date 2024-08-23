import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,NgFor,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        console.log('Fetched products:', data.products);         
        this.products = data.products;

      },
      error: (err) => {
        console.error('Error fetching products', err);
      }
    });
  }
  viewProductDetails(productId: number): void {
    this.router.navigate(['/product-details', productId]);
  }
}
