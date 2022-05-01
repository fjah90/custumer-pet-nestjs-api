import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustumersService } from './custumers.service';
import { CustumersController } from './custumers.controller';
import { Custumer, CustumerSchema } from '../../schemas/custumer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Custumer.name, schema: CustumerSchema }])
  ],
  controllers: [CustumersController],
  providers: [CustumersService]
})
export class CustumersModule {}
