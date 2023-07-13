import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, HealthModule],
})
export class AppModule {}
