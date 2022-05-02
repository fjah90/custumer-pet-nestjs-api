/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './modules/pets/pets.module';
import { CustumersModule } from './modules/custumers/custumers.module';

const uri = 'mongodb://localhost:27017/petApp';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_STORE_URI || uri), PetsModule, CustumersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
