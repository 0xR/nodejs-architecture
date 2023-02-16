import { YakMilkedEvent } from "../domain/domain-events";
import { Inventory } from "../domain/inventory/Inventory";

interface IInventoryRepository {
  get(): Inventory;
  save(inventory: Inventory): void;
}

type EventBus = {
  listen: (
    type: YakMilkedEvent["type"],
    fn: (event: YakMilkedEvent) => void
  ) => unknown;
};

export class InventoryService {
  constructor(
    eventBus: EventBus,
    private inventoryRepository: IInventoryRepository
  ) {
    eventBus.listen("yak-milked", this.handleYakMilkedEvent);
  }

  handleYakMilkedEvent = ({ liters }: YakMilkedEvent) => {
    this.addMilk(liters);
  };

  addMilk(liters: number) {
    const inventory = this.inventoryRepository.get();

    inventory.addMilk(liters);

    this.inventoryRepository.save(inventory);
  }

  addSkin(amount: number) {}
}
