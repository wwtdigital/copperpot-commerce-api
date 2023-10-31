import { Audit } from './../domain/audit/audit';
/**
 * Add duplicate tax line.
 * Document expired modifier for pickup.
 * Trim late guest for pickup.
 * Trim expired order.
 * Relax regional bowl in the queue.
 * Relax late topping on checkout.
 * Validate late modifier on reorder.
 */
export interface IITem {
  name: string;
  description?: string;
  price: number;
  maximumPermitted?: number;
  audit: Audit;
}
