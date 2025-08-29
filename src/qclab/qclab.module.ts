import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QclabController } from './qclab.controller';
import { QclabService } from './qclab.service';
import { Qclab } from './qclab.entity';
import { QclabElement } from './qclab-element.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Qclab, QclabElement])],
  controllers: [QclabController],
  providers: [QclabService],
})
export class QclabModule {}
