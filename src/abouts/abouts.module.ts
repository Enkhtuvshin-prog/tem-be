import { Module } from '@nestjs/common';
import { AboutsService } from './abouts.service';
import { AboutsController } from './abouts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutSchema } from './entities/about.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:'About', schema:AboutSchema}])],
  controllers: [AboutsController],
  providers: [AboutsService]
})
export class AboutsModule {}
