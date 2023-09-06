/* SortMissingCateringTrayDto: shape for sort missing catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortMissingCateringTrayDto {
  paginateLateReceipt!: number;
  addLateBowl?: number;
  guardPartialModifier!: Date;
  exposeStaleTaxLine!: Date;
}
