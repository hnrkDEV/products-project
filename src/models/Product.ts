export abstract class Product {
  //attributes
  private id: number;
  private name: string;
  private price: number;
  private quantity: number;

  //constructor
  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  //getters
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getPrice(): number {
    return this.price;
  }
  public getQuantity(): number {
    return this.quantity;
  }

  //setters
  public setId(id: number): void {
    this.id = id;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public setPrice(price: number): void {
    this.price = price;
  }
  public setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  protected getExtraInfo(): string {
    return "";
  }

  //methods
  public displayInfo(): void {
    console.log(
      `Product [ID: ${this.id}, Name: ${
        this.name
      }, Price: $${this.price.toFixed(2)}, Quantity: ${
        this.quantity
      }${this.getExtraInfo()}]`
    );
  }
}
