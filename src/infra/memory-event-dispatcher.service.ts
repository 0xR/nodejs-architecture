import { Injectable } from '@nestjs/common';
import { EventEmitter } from 'node:events';
import { DomainEvent, YakMilkedEvent } from '../domain/domain-events';
import { EventDispatcher } from '../domain/ddd/EventDispatcher';

@Injectable()
export class MemoryEventDispatcher implements EventDispatcher {
  private eventEmitter = new EventEmitter();

  async dispatch(...domainEvents: DomainEvent[]) {
    domainEvents.forEach((domainEvent) => {
      this.eventEmitter.emit(domainEvent.type, domainEvent);
    });
  }

  listen(
    type: YakMilkedEvent['type'],
    fn: (event: YakMilkedEvent) => void,
  ): void {
    this.eventEmitter.on(type, fn);
  }
}
