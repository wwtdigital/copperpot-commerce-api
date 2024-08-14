import { NestFactory } from '@nestjs/core';
import { validatePipeInstance } from '../../infrastructure';
import { StoreApiModule } from './store-api.module';

async function bootstrap() {
  const app = await NestFactory.create(StoreApiModule);
  app.setGlobalPrefix('store');
  app.useGlobalPipes(validatePipeInstance);
  await app.listen(Number(process.env.STORE_API_PORT ?? 4100));
}
bootstrap();
