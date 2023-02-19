import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { InventoryRepository } from '../domain/inventory/InventoryRepository';

@Controller('inventory')
@UseInterceptors(ClassSerializerInterceptor)
export class InventoryController {
  constructor(private inventoryRespostory: InventoryRepository) {}

  @Get()
  async getInventory() {
    return this.inventoryRespostory.get();
  }
}
