import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PagesController } from './pages.controller';
import { PageEntity } from './pages.entity';
import { PagesService } from './pages.service';


@Module({
  imports :[TypeOrmModule.forFeature([PageEntity])],
  controllers: [PagesController],
  providers: [PagesService]
})
export class PagesModule {}
