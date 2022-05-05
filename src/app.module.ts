/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './modules/pets/pets.module';
import { CustumersModule } from './modules/custumers/custumers.module';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helper/env.helper';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

// const uri = 'mongodb+srv://petapp:XAANlb5scTTLPN4f@cluster0.d7ukh.mongodb.net/petApp';
// const uri = 'mongodb://localhost:27017/petApp';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_HOST),
    PetsModule,
    CustumersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
