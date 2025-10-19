import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    
    MongooseModule.forRoot(MONGODB_URI),
    AuthModule,
    UsersModule,
  ],
  
})

export class AppModule {}