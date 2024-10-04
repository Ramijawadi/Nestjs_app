import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';
import { ThrottlerGuard , ThrottlerModule } from '@nestjs/throttler';
import {APP_GUARD} from '@nestjs/core'
import { MyLoggerModule } from './my-logger/my-logger.module';
@Module({
  imports: [UsersModule, 
            DatabaseModule,
           EmployeeModule ,
          ThrottlerModule.forRoot([{
          ttl:60000 ,
          limit: 3

          }]),
          MyLoggerModule],
  controllers: [AppController],
  providers: [AppService , 
   {
    provide : APP_GUARD , 
    useClass : ThrottlerGuard
   }
  ],
})
export class AppModule {}
