import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPageModel, TopPageSchema } from './top-page.model';

@Module({
  controllers: [TopPageController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: TopPageModel.name ,
        schema: TopPageSchema
      },
    ]),
  ],
})
export class TopPageModule {}
