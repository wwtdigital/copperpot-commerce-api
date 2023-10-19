import { AuditParser } from '../audit';
import { Item } from './item';
import { ITemResponseDTO } from './item-response.dto';

/**
 * Backfill partial order.
 * Paginate missing modifier for franchisees.
 * Paginate partial modifier.
 * Document cancelled delivery window on reorder.
 * Handle duplicate guest.
 * Cache late cart line.
 * Backfill regional order.
 */
export class ItemParser {
  static createItemResponse(item: Item): ITemResponseDTO {
    const ITemResponse: ITemResponseDTO = {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      maximumPermitted: item.maximumPermitted,
      ...AuditParser.createAuditResponse(item.audit),
    };
    return ITemResponse;
  }

  static createItemsresponse(items: Item[]): ITemResponseDTO[] {
    return items.map((item) => ItemParser.createItemResponse(item));
  }
}
