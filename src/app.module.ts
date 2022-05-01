import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsModule } from './modules/pets/pets.module';
import { CustumersModule } from './modules/custumers/custumers.module';

// const uri = "mongodb+srv://petapp:ib1Olgh2Ud1SVu53@cluster0.d7ukh.mongodb.net/petApp?tls=true&tlsInsecure=true&tlsAllowInvalidHostnames=true&tlsAllowInvalidCertificates=true";
const uri = 'mongodb://localhost:27017/petApp';

@Module({
  imports: [MongooseModule.forRoot(uri), PetsModule, CustumersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
