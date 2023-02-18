import { Entity } from '../ddd/Entity';

export class Inventory extends Entity {
  private constructor(
    private litersOfMilk: number,
    private numberOfSkins: number,
  ) {
    super();
  }

  static MAX_LITERS = 100;

  addMilk(liters: number) {
    const newLitersOfMilk = this.litersOfMilk + liters;

    if (newLitersOfMilk > Inventory.MAX_LITERS) {
      throw new Error('Max liters of milk reached');
    }

    this.litersOfMilk = newLitersOfMilk;
  }

  static create() {
    return new this(0, 0);
  }
}
