import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponce } from '../models/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  url: string = 'https://dummyjson.com/products';
  favorites: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductResponce>(this.url);
  }

  addFavorite(item: Product) {
    this.favorites.push(item);
    console.log(this.favorites);
  }

  removeFavorite(itemId: number) {
    this.favorites = this.favorites.filter((product) => product.id !== itemId);
  }
}
