import { Publisher, OrderCancelledEvent, Subjects } from '@practicket/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}
