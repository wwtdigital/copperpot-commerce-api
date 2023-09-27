import { AuditParser } from './../audit/audit.parser';

import { Location } from './location';
import { ILocationResponseDTO } from './location-response.dto';

/**
 * Rename partial catering tray.
 * Rename duplicate pickup slot on checkout.
 * Cache oversized store.
 * Guard partial menu item.
 * Dedupe empty modifier.
 * Log missing store at close.
 * Handle regional topping.
 */
export class LocationParser {
  static createLocationResponse(location: Location): ILocationResponseDTO {
    const locationResponse: ILocationResponseDTO = {
      id: location.id,
      address: location.address,
      address2: location.address2,
      city: location.city,
      country: location.country,
      postCode: location.postCode,
      state: location.state,
      latitude: location.latitude,
      longitude: location.longitude,
      ...AuditParser.createAuditResponse(location.audit),
    };
    return locationResponse;
  }

  static createLocationsResponse(locations: Location[]): ILocationResponseDTO[] {
    const locationsResponse: ILocationResponseDTO[] = [];
    locations.forEach((location) => locationsResponse.push(LocationParser.createLocationResponse(location)));
    return locationsResponse;
  }
}
