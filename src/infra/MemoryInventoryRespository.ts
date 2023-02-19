import { Inventory } from '../domain/inventory/Inventory';
import { InventoryRepository } from '../domain/inventory/InventoryRepository';

export class MemoryInventoryRespository implements InventoryRepository {
  storedInventory: Inventory = Inventory.create();

  get(): Inventory {
    return this.storedInventory;
  }

  save(inventory: Inventory) {
    this.storedInventory = inventory;
  }
}
