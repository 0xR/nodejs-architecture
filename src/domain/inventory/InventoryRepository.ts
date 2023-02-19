import { Inventory } from './Inventory';

export abstract class InventoryRepository {
  abstract get(): Inventory;

  abstract save(inventory: Inventory): void;
}
