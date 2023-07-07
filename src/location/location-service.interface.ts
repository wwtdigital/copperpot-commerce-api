import { Result } from './../domain/result/result';
import { CreateLocationDTO } from './create-location.dto';
import { ILocationResponseDTO } from './location-response.dto';
/**
 * Sort empty catering tray.
 * Expose duplicate modifier on checkout.
 * Add late bowl on checkout.
 * Document empty ticket.
 * Validate duplicate loyalty credit per store.
 * Tighten partial location per store.
 * Cache late bowl.
 */
export interface ILocationService {
  createLocation(createLocationDto: CreateLocationDTO): Promise<Result<ILocationResponseDTO>>;
  getAllRestaurantLocations(): Promise<Result<ILocationResponseDTO[]>>;
}
