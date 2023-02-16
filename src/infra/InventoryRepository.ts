import { Inventory } from "../domain/inventory/Inventory";

let storedInventory: Inventory = Inventory.create();

export class InventoryRepository {
  get(): Inventory {
    return storedInventory;
  }

  save(inventory: Inventory) {
    storedInventory = inventory;
  }
}
