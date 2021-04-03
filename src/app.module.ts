import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpErrorFillter } from './shared/http-error.fillter';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagesModule } from './pages/pages.module';
@Module({
  imports: [TypeOrmModule.forRoot(), PagesModule],
  controllers: [AppController, TestController],
  providers: [AppService, TestService,
    {
    provide: APP_FILTER,
    useClass:HttpErrorFillter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor

    }
  ],
})
export class AppModule {}
