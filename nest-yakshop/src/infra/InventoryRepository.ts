import { Inventory } from '../domain/inventory/Inventory';
import { IInventoryRepository } from '../domain/inventory/InventoryRepository';

export class InventoryRepository implements IInventoryRepository {
  storedInventory: Inventory = Inventory.create();

  get(): Inventory {
    return this.storedInventory;
  }

  save(inventory: Inventory) {
    this.storedInventory = inventory;
  }
}
