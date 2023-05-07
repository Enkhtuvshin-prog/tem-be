import { Module } from '@nestjs/common';
import { HeadersService } from './headers.service';
import { HeadersController } from './headers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HeaderSchema } from './entities/header.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Header', schema: HeaderSchema }]),
  ],
  controllers: [HeadersController],
  providers: [HeadersService]
})
export class HeadersModule {}
