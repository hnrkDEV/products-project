import { Product } from "./Product";

export class ElectronicProduct extends Product {
  //attributes
  private voltage: string;
  private warrantyMonths: number;

  //constructor
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    voltage: string,
    warrantyMonths: number
  ) {
    super(id, name, price, quantity);
    this.voltage = voltage;
    this.warrantyMonths = warrantyMonths;
  }

  //methods
  public getExtraInfo(): string {
    return `, Voltage: ${this.voltage}, Warranty: ${this.warrantyMonths} months`;
  }
}
