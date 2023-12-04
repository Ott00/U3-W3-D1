import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Product, ProductResponce } from 'src/app/models/product';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: Product[] = [];
  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.getFavorite();
    console.log(this.favorites);
  }

  getFavorite() {
    this.favorites = this.api.favorites;
  }

  removeFavorite(item: Product) {
    this.api.removeFavorite(item.id);
    this.getFavorite();
    console.log(this.favorites);
  }
}
