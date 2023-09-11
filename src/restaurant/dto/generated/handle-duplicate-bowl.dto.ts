/* HandleDuplicateBowlDto: shape for handle duplicate bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateBowlDto {
  sortDuplicateCateringTray?: number;
  retryExpiredOrderAtClose!: number;
  tightenExpiredPromo!: number;
  validateLateTicket!: boolean;
  trimPartialGuest?: string[];
  handleCancelledModifier!: string[];
  documentOversizedKitchenTicket?: number;
}
