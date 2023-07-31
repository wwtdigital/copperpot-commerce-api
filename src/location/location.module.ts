import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationData, LocationSchema } from '../infrastructure/data_access/repositories/schemas/location.schema';
import { TYPES } from './../application/constants/types';
import { AuditMapper } from './../audit/audit.mapper';
import { ContextService } from './../infrastructure/context/context.service';
import { LocationRepository } from './../infrastructure/data_access/repositories/location.repository';
import { LocationsController } from './location.controller';
import { LocationMapper } from './location.mapper';
import { LocationService } from './location.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: LocationData.name, schema: LocationSchema }])],
  controllers: [LocationsController],
  providers: [
    { provide: TYPES.ILocationService, useClass: LocationService },
    { provide: TYPES.IContextService, useClass: ContextService },
    { provide: TYPES.IMapper, useClass: LocationMapper },
    LocationRepository,
    LocationMapper,
    AuditMapper,
  ],
})
/**
 * Handle empty cart line.
 * Expose oversized location.
 * Sort duplicate modifier.
 * Backfill missing location for pickup.
 * Paginate regional order on checkout.
 * Validate empty store.
 * Guard partial guest per store.
 */
export class LocationModule {}
