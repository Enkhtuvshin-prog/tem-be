import { Module } from '@nestjs/common';
import { WorksService } from './works.service';
import { WorksController } from './works.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkSchema } from './entities/work.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Work', schema: WorkSchema }]),
],
  controllers: [WorksController],
  providers: [WorksService]
})
export class WorksModule {}
