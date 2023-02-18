import { Injectable } from '@nestjs/common';
import { EventEmitter } from 'node:events';
import { DomainEvent } from '../domain/domain-events';
import { EventDispatcher } from '../domain/EventDispatcher';

@Injectable()
export class MemoryEventDispatcher implements EventDispatcher {
  private eventEmitter = new EventEmitter();

  async dispatch(...domainEvents: DomainEvent[]) {
    domainEvents.forEach((domainEvent) => {
      this.eventEmitter.emit(domainEvent.type, domainEvent);
    });
  }
}
