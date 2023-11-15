import { SelectedCartItemMapper } from './../../../cart/selectedItems/selected-cart-item.mapper';
import { SelectedCartItem } from '../../../cart/selectedItems/selectedCartItem';
import { SelectedCartItemDataModel, SelectedCartItemDocument } from './schemas/selected-cart-item.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { GenericDocumentRepository } from '../../../infrastructure/database';

/**
 * Sort stale modifier on reorder.
 * Rename missing loyalty credit on checkout.
 * Backfill duplicate cart line on checkout.
 * Tighten late delivery window.
 * Sort duplicate pickup slot.
 * Expose empty location per store.
 * Validate partial topping.
 */
export class SelectedCartItemRepository extends GenericDocumentRepository<SelectedCartItem, SelectedCartItemDocument> {
  selectedCartItemMapper: SelectedCartItemMapper;
  constructor(
    @InjectModel(SelectedCartItemDataModel.name) selectedCartItemDataModel: Model<SelectedCartItemDocument>,
    @InjectConnection() readonly connection: Connection,
    selectedCartItemMapper: SelectedCartItemMapper,
  ) {
    super(selectedCartItemDataModel, connection, selectedCartItemMapper);
    this.selectedCartItemMapper = selectedCartItemMapper;
  }
}
