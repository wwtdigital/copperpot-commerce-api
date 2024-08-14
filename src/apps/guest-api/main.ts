import { NestFactory } from '@nestjs/core';
import { validatePipeInstance } from '../../infrastructure';
import { GuestApiModule } from './guest-api.module';

async function bootstrap() {
  const app = await NestFactory.create(GuestApiModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(validatePipeInstance);
  app.enableCors();
  await app.listen(Number(process.env.GUEST_API_PORT ?? 4000));
}
bootstrap();
