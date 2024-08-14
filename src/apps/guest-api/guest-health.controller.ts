import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class GuestHealthController {
  @Get()
  health() {
    return { app: 'guest-api', status: 'ok' };
  }
}
