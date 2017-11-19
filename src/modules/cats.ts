import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { CatsController } from '../controllers/cats';
import { CatsService } from '../services/cats';
import { LoggerMiddleware } from '../middleware/logger';

@Module({
    modules: [],
    controllers: [CatsController],
    components: [CatsService],
})
export class CatsModule {
  configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware)
            .with(this)
            .forRoutes(CatsController);
    }
}
