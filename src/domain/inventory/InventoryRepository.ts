import { Inventory } from './Inventory';

export abstract class IInventoryRepository {
  abstract get(): Inventory;

  abstract save(inventory: Inventory): void;
}
