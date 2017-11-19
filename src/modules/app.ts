import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { CatsModule } from './cats';

@Module({
    modules: [CatsModule],
    controllers: [],
    components: [],
})
export class ApplicationModule {}
