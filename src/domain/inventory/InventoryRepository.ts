import type { Inventory } from "./Inventory";

export interface IInventoryRepository {
  get(): Inventory;

  save(inventory: Inventory): void;
}
