import { YakMilkedEvent } from "../domain-events";
import type { IInventoryRepository } from "./InventoryRepository";

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
    eventBus.listen("YakMilkedEvent", this.handleYakMilkedEvent);
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
