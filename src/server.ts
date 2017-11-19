import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app';
import { ExceptionsFilter } from './exceptions/exception';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalFilters(new ExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
