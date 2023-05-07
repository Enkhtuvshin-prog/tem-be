import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeadersModule } from './headers/headers.module';
import { ParagraphsModule } from './paragraphs/paragraphs.module';
import { ButtonsModule } from './buttons/buttons.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { WorksModule } from './works/works.module';
import { AboutsModule } from './abouts/abouts.module';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [ ConfigModule.forRoot({envFilePath:'.env', isGlobal:true}), MongooseModule.forRoot(process.env.MONGO_URI),
    HeadersModule, ParagraphsModule, ButtonsModule, CategoriesModule, WorksModule, AboutsModule, OffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
