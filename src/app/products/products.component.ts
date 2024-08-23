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
  selectedSort: string = 'price';
  searchQuery: string = '';

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

  sortProducts(): void {
    if (this.selectedSort === 'price') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (this.selectedSort === 'title') {
      this.products.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.selectedSort === 'category') {
      this.products.sort((a, b) => a.category.name.localeCompare(b.category.name));
    }
  }
  onSortChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedSort = target.value;
    this.sortProducts(); 
}
onSearchChange(event: Event): void {
  const target = event.target as HTMLInputElement;
  this.searchQuery = target.value;

  if (this.searchQuery.length > 0) {
    this.productService.searchProducts(this.searchQuery).subscribe({
      next: (data: any) => {
        this.products = data.products;
      },
      error: (err) => {
        console.error('Error searching products', err);
      }
    });
  } else {
    this.loadProducts();  
  }
}
}
