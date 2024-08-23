import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this._HttpClient.get<Product[]>('http://127.0.0.1:8000/api/products');
  }
}
