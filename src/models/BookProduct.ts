import { Product } from "./Product";

export class BookProduct extends Product {
  //attributes
  private author: string;
  private pages: number;

  //constructor
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    author: string,
    pages: number
  ) {
    super(id, name, price, quantity);
    this.author = author;
    this.pages = pages;
  }
  //methods
  public getExtraInfo(): string {
    return `, Author: ${this.author}, Pages: ${this.pages}`;
  }
}
