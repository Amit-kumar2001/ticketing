import { Publisher, OrderCreatedEvent, Subjects } from '@practicket/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated
}
