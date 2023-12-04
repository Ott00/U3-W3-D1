import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Product, ProductResponce } from 'src/app/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products!: ProductResponce;
  sub!: Subscription;
  list!: Product[];

  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.sub = this.api.getProducts().subscribe((result) => {
      this.products = result;
      this.list = result.products;
      console.log(this.list);
    });
  }

  addFavorite(item: Product, e: Event) {
    this.api.addFavorite(item);
    const button = e.currentTarget as HTMLButtonElement;
    button.disabled = true;
  }
}
