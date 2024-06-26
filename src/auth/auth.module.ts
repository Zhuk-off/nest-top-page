import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthModel, AuthSchema } from './auth.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([
      {
        name: AuthModel.name ,
        schema: AuthSchema
      },
    ]),
  ],
})
export class AuthModule {}
