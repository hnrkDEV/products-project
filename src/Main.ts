import readline from "readline-sync";
import { colors } from "./utils/Colors";
import { Product } from "./models/Product";
import { FoodProduct } from "./models/FoodProduct";
import { ElectronicProduct } from "./models/ElectronicProduct";
import { ClothingProduct } from "./models/ClothingProduct";
import { BookProduct } from "./models/BookProduct";
import { ProductInterface } from "./repository/ProductInterface";
import { ProductController } from "./controller/ProductController";

// Function to demonstrate basic operations
function main() {
  let productController: ProductController = new ProductController();

  let option,
    id,
    price,
    weightGrams,
    warrantyMonths,
    quantity,
    type,
    pages: number;
  let name, voltage, size, color, author: string;
  let expirationDate: Date;
  let isPerishable: boolean;
  const productTypes = [
    "FoodProduct",
    "ElectronicProduct",
    "ClothingProduct",
    "BookProduct",
  ];
  do {
    option =
      readline.keyInSelect(
        [
          "Add Product",
          "View Products",
          "view Products by Type",
          "Buy Product",
          "Restock Product",
          "Update Product",
          "Delete Product",
          "Search Product by Name",
        ],
        "",
        { cancel: "Exit" }
      ) + 1;
    console.log(option);
    switch (option) {
      case 1:
        console.log(colors.fg.yellow, "\n--- Add Product ---");
        type = readline.keyInSelect(productTypes, "Select product type:") + 1;
        name = readline.question("Enter product name: ");
        price = readline.questionInt("Enter product price: ");
        quantity = readline.questionInt("Enter product quantity: ");
        switch (type) {
          case 1:
            weightGrams = readline.questionInt("Enter weight in grams: ");
            expirationDate = new Date(
              readline.question("Enter expiration date (YYYY-MM-DD): ")
            );
            isPerishable =
              readline.question("Is the product perishable? (yes/no): ") ===
              "yes";
            const foodProduct = new FoodProduct(
              productController.generateId(),
              name,
              price,
              quantity,
              expirationDate,
              weightGrams,
              isPerishable
            );
            productController.createProduct(foodProduct, "FoodProduct");
            break;
          case 2:
            voltage = readline.question("Enter voltage (e.g., 110V, 220V): ");
            warrantyMonths = readline.questionInt(
              "Enter warranty period in months: "
            );
            const electronicProduct = new ElectronicProduct(
              productController.generateId(),
              name,
              price,
              quantity,
              voltage,
              warrantyMonths
            );
            productController.createProduct(
              electronicProduct,
              "ElectronicProduct"
            );
            break;
          case 3:
            size = readline.question(
              "Enter clothing size (e.g., S, M, L, XL): "
            );
            color = readline.question("Enter clothing color: ");
            const clothingProduct = new ClothingProduct(
              productController.generateId(),
              name,
              price,
              quantity,
              size,
              color
            );
            productController.createProduct(clothingProduct, "ClothingProduct");
            break;
          case 4:
            author = readline.question("Enter author name: ");
            pages = readline.questionInt("Enter number of pages: ");
            const bookProduct = new BookProduct(
              productController.generateId(),
              name,
              price,
              quantity,
              author,
              pages
            );
            productController.createProduct(bookProduct, "BookProduct");
            break;
          default:
            console.log(colors.fg.red, "Invalid product type selected.");
        }
        keyPress();
        break;
      case 2:
        console.log(colors.fg.yellow, "\n--- View Products ---");
        productController.getAllProducts();
        keyPress();
        break;
      case 3:
        console.log(colors.fg.yellow, "\n--- View Products by Type ---");
        type = readline.keyInSelect(productTypes, "Select product type:") + 1;
        let productsByType = productController.getAllProductByType(type);
        productsByType.map((product) => {
          return product.displayInfo();
        });

        keyPress();
        break;
      case 4:
        console.log(colors.fg.yellow, "\n--- Buy Product ---");
        id = readline.questionInt("Enter product ID to buy: ");
        quantity = readline.questionInt("Enter quantity to buy: ");
        productController.buyProduct(id, quantity);
        keyPress();
        break;
      case 5:
        console.log(colors.fg.yellow, "\n--- Restock Product ---");
        id = readline.questionInt("Enter product ID to restock: ");
        quantity = readline.questionInt("Enter quantity to restock: ");
        productController.restockProduct(id, quantity);
        keyPress();
        break;
      case 6:
        console.log(colors.fg.yellow, "\n--- Update Product ---");
        id = readline.questionInt("Enter product ID to update: ");

        const product = productController.searchById(id);
        if (!product) {
          console.log(colors.fg.red, "Product not found.");
          keyPress();
          break;
        }
        let updatedProduct: Product = product;

        switch (true) {
          case product instanceof FoodProduct:
            name = readline.question("Enter product name: ");
            price = readline.questionInt("Enter product price: ");
            quantity = readline.questionInt("Enter product quantity: ");
            weightGrams = readline.questionInt("Enter weight in grams: ");
            expirationDate = new Date(
              readline.question("Enter expiration date (YYYY-MM-DD): ")
            );
            isPerishable =
              readline.question("Is the product perishable? (yes/no): ") ===
              "yes";
            updatedProduct = new FoodProduct(
              product.getId(),
              name,
              price,
              quantity,
              expirationDate,
              weightGrams,
              isPerishable
            );
            productController.updateProduct(id, updatedProduct);
            break;
          case product instanceof ElectronicProduct:
            name = readline.question("Enter product name: ");
            price = readline.questionInt("Enter product price: ");
            quantity = readline.questionInt("Enter product quantity: ");
            voltage = readline.question("Enter voltage (e.g., 110V, 220V): ");
            warrantyMonths = readline.questionInt(
              "Enter warranty period in months: "
            );
            updatedProduct = new ElectronicProduct(
              product.getId(),
              name,
              price,
              quantity,
              voltage,
              warrantyMonths
            );
            productController.updateProduct(id, updatedProduct);
            break;
          case product instanceof ClothingProduct:
            name = readline.question("Enter product name: ");
            price = readline.questionInt("Enter product price: ");
            quantity = readline.questionInt("Enter product quantity: ");
            size = readline.question(
              "Enter clothing size (e.g., S, M, L, XL): "
            );
            color = readline.question("Enter clothing color: ");
            updatedProduct = new ClothingProduct(
              product.getId(),
              name,
              price,
              quantity,
              size,
              color
            );
            productController.updateProduct(id, updatedProduct);
            break;
          case product instanceof BookProduct:
            name = readline.question("Enter product name: ");
            price = readline.questionInt("Enter product price: ");
            quantity = readline.questionInt("Enter product quantity: ");
            author = readline.question("Enter author name: ");
            pages = readline.questionInt("Enter number of pages: ");
            updatedProduct = new BookProduct(
              product.getId(),
              name,
              price,
              quantity,
              author,
              pages
            );
            break;
        }
        productController.updateProduct(id, updatedProduct);
        keyPress();
        break;

      case 7:
        console.log(colors.fg.yellow, "\n--- Delete Product ---");
        id = readline.questionInt("Enter product ID to delete: ");
        productController.deleteProduct(id);
        keyPress();
        break;

      case 8:
        console.log(colors.fg.yellow, "\n--- Search Product by Name ---");
        name = readline.question("Enter product name to search: ");
        let foundProducts = productController.searchProductsByName(name);
        foundProducts.map((product) => {
          return product.displayInfo();
        });
        keyPress();
        break;
    }
    console.log(
      colors.bg.black,
      colors.fg.cyanstrong,
      "\n=============== Product Management System ==============="
    );
  } while (option !== 0);
}
function keyPress(): void {
  console.log(colors.reset, "");
  console.log("\nPress enter to continue...");
  readline.prompt();
}

main();
