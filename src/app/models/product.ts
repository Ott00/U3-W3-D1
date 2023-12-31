export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductResponce {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface CartItem extends Product {
  amount: number;
  totalPrice: number;
}
