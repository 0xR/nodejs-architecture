import { Injectable } from '@nestjs/common';
import { EventDispatcher } from '../ddd/EventDispatcher';
import { YakMilkedEvent } from '../domain-events';
import { IInventoryRepository } from './InventoryRepository';

@Injectable()
export class InventoryService {
  constructor(
    private eventDispatcher: EventDispatcher,
    private inventoryRepository: IInventoryRepository,
  ) {
    eventDispatcher.listen('YakMilkedEvent', this.handleYakMilkedEvent);
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
