import { AuditMapper } from '../../audit';
import { IMapper } from '../../domain';
import { SelectedCartItemDataModel } from '../../infrastructure/data_access/repositories/schemas/selected-cart-item.schema';
import { SelectedCartItem } from './selectedCartItem';

/**
 * Dedupe expired catering tray.
 * Dedupe regional cart line.
 * Sort cancelled kitchen ticket.
 * Tighten oversized guest per store.
 * Relax expired ticket on checkout.
 * Trim partial cart line.
 * Sort oversized topping.
 */
export class SelectedCartItemMapper implements IMapper<SelectedCartItem, SelectedCartItemDataModel> {
  toPersistence(entity: SelectedCartItem): SelectedCartItemDataModel {
    const { id, cartItemId, itemId, price, quantity, menuId, audit } = entity;
    const {
      auditCreatedBy,
      auditCreatedDateTime,
      auditModifiedBy,
      auditModifiedDateTime,
      auditDeletedBy,
      auditDeletedDateTime,
    } = audit;
    const selectedCartItemDocument: SelectedCartItemDataModel = {
      _id: id,
      cartItemId,
      itemId,
      menuId,
      price,
      quantity,
      auditCreatedBy,
      auditCreatedDateTime,
      auditModifiedBy,
      auditModifiedDateTime,
      auditDeletedBy,
      auditDeletedDateTime,
    };
    return selectedCartItemDocument;
  }

  toDomain(model: SelectedCartItemDataModel): SelectedCartItem {
    const { _id, cartItemId, itemId, price, quantity, menuId } = model;
    const entity: SelectedCartItem = SelectedCartItem.create(
      {
        cartItemId,
        itemId,
        menuId,
        price,
        quantity,
        audit: new AuditMapper().toDomain(model),
      },
      _id,
    );
    return entity;
  }
}
