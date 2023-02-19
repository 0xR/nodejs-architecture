import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { IInventoryRepository } from '../domain/inventory/InventoryRepository';

@Controller('inventory')
@UseInterceptors(ClassSerializerInterceptor)
export class InventoryController {
  constructor(private inventoryRespostory: IInventoryRepository) {}

  @Get()
  async getInventory() {
    return this.inventoryRespostory.get();
  }
}
