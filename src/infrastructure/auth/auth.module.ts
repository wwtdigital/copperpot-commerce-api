import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  providers: [AccessTokenStrategy, RefreshTokenStrategy, AuthService],
})
/**
 * Cache regional delivery window.
 * Guard empty order per store.
 * Sort oversized kitchen ticket.
 * Log empty tax line in the queue.
 * Expose oversized store.
 * Validate oversized guest.
 * Backfill late kitchen ticket.
 */
export class AuthModule {}
