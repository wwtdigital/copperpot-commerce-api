import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class StoreHealthController {
  @Get()
  health() {
    return { app: 'store-api', status: 'ok' };
  }
}
