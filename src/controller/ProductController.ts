import { ProductInterface } from "../repository/ProductInterface";
import { Product } from "../models/Product";
import { FoodProduct } from "../models/FoodProduct";
import { ElectronicProduct } from "../models/ElectronicProduct";
import { ClothingProduct } from "../models/ClothingProduct";
import { BookProduct } from "../models/BookProduct";

export class ProductController implements ProductInterface {
  private products: Array<Product> = [];
  idProduct: number = 0;

  createProduct(product: Product, type: string): void {
    if (type === "FoodProduct" && product instanceof FoodProduct) {
      this.products.push(product);
    } else if (
      type === "ElectronicProduct" &&
      product instanceof ElectronicProduct
    ) {
      this.products.push(product);
    } else if (
      type === "ClothingProduct" &&
      product instanceof ClothingProduct
    ) {
      this.products.push(product);
    } else if (type === "BookProduct" && product instanceof BookProduct) {
      this.products.push(product);
    } else {
      throw new Error("Invalid product type or product instance.");
    }
  }

  getProductById(id: number): Product | null {
    return this.searchById(id);
  }
  updateProduct(id: number, updatedProduct: Product): void {
    const index = this.products.findIndex((product) => product.getId() === id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    } else {
      throw new Error("Product not found.");
    }
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex((product) => product.getId() === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    } else {
      throw new Error("Product not found.");
    }
  }

  getAllProducts(): void {
    this.products.map((product) => {
      return product.displayInfo();
    });
  }

  getAllProductByType(type: number): Product[] {
    return this.products.filter((product) => {
      if (type === 1 && product instanceof FoodProduct) {
        return true;
      } else if (type === 2 && product instanceof ElectronicProduct) {
        return true;
      } else if (type === 3 && product instanceof ClothingProduct) {
        return true;
      } else if (type === 4 && product instanceof BookProduct) {
        return true;
      }
      return false;
    });
  }

  searchProductsByName(name: string): Product[] {
    return this.products.filter((product) =>
      product.getName().toLowerCase().includes(name.toLowerCase())
    );
  }

  buyProduct(id: number, quantity: number): void {
    const product = this.searchById(id);
    if (product) {
      const currentQuantity = product.getQuantity();
      if (currentQuantity >= quantity) {
        product.setQuantity(currentQuantity - quantity);
      } else {
        throw new Error("Insufficient stock.");
      }
    } else {
      throw new Error("Product not found.");
    }
  }

  restockProduct(id: number, quantity: number): void {
    const product = this.searchById(id);
    if (product) {
      const currentQuantity = product.getQuantity();
      product.setQuantity(currentQuantity + quantity);
    } else {
      throw new Error("Product not found.");
    }
  }

  public searchById(id: number): Product | null {
    for (let product of this.products) {
      if (product.getId() === id) {
        return product;
      }
    }
    return null;
  }

  public generateId(): number {
    return ++this.idProduct;
  }
}
