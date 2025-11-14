import { Module, Global } from '@nestjs/common'; // 1. Імпортуй Global
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Global()
@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, PrismaService],
    exports: [PrismaService],
})
export class AppModule {}