import { Body, Controller, Post } from '@nestjs/common';
import { QclabService } from './qclab.service';
import { CreateQclabDto } from './dto/create-qclab.dto';

@Controller('qclab')
export class QclabController {
  constructor(private readonly qclabService: QclabService) {}

  @Post()
  create(@Body() createQclabDto: CreateQclabDto) {
    return this.qclabService.create(createQclabDto);
  }
}
