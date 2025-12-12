import { Product } from "./Product";

export class ClothingProduct extends Product {
  //attributes
  private size: string;
  private color: string;

  //constructor
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    size: string,
    color: string
  ) {
    super(id, name, price, quantity);
    this.size = size;
    this.color = color;
  }

  //methods
  public getExtraInfo(): string {
    return `, Size: ${this.size}, Color: ${this.color}`;
  }
}
