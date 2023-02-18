import { Injectable } from '@nestjs/common';
import { EventEmitter } from 'node:events';
import { DomainEvent } from '../domain/domain-events';

@Injectable()
export class EventDispatcher {
  private eventEmitter = new EventEmitter();

  dispatch(...domainEvents: DomainEvent[]) {
    domainEvents.forEach((domainEvent) => {
      this.eventEmitter.emit(domainEvent.type, domainEvent);
    });
  }
}
