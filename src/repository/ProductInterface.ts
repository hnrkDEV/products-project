import { Product } from "../models/Product";

export interface ProductInterface {
  //CRUD
  createProduct(product: Product, type: string): void;
  getProductById(id: number): void;
  updateProduct(id: number, updatedProduct: Product): void;
  deleteProduct(id: number): void;
  getAllProducts(): void;
  getAllProductByType(type: number): void;
  //Additional Methods
  searchProductsByName(name: string): void;
  buyProduct(id: number, quantity: number): void;
  restockProduct(id: number, quantity: number): void;
}
