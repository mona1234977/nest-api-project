import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [UserModule, AuthModule,ChatModule,MessageModule,
    MongooseModule.forRoot("mongodb://localhost:27017")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
