import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TodoModule } from './modules/todos/todo.module';
import { DataSource } from 'typeorm';
import { typeormOpts } from './database/database.providers';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeormOpts),
    AuthModule,
    UsersModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    console.log('[AppModule] Data Source:', dataSource);
  }
}
