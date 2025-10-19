import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // ✅ Load env file first
    ConfigModule.forRoot(),

    // ✅ Now we can safely use it
    MongooseModule.forRoot(process.env.MONGODB_URI as string),

    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
