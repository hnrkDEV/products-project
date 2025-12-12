import { Product } from "./Product";

export class FoodProduct extends Product {
  //attributes
  private expirationDate: Date;
  private weightGrams: number;
  private isPerishable: boolean;

  //constructor
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    expirationDate: Date,
    weightGrams: number,
    isPerishable: boolean
  ) {
    super(id, name, price, quantity);
    this.expirationDate = expirationDate;
    this.weightGrams = weightGrams;
    this.isPerishable = isPerishable;
  }

  //methods
  public getExtraInfo(): string {
    return `, Expiration: ${this.expirationDate.toDateString()}, Weight: ${
      this.weightGrams
    }g, Perishable: ${this.isPerishable ? "Yes" : "No"}`;
  }
}
