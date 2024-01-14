import { PaymentCreatedEvent, Publisher, Subjects } from '@practicket/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}
