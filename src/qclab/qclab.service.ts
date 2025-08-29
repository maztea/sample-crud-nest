import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQclabDto } from './dto/create-qclab.dto';
import { Qclab } from './qclab.entity';

@Injectable()
export class QclabService {
  constructor(
    @InjectRepository(Qclab)
    private readonly qclabRepository: Repository<Qclab>,
  ) {}

  async create(createQclabDto: CreateQclabDto) {
    const qclab = this.qclabRepository.create({
      ...createQclabDto.headerData,
      elements: createQclabDto.elementData,
    });
    return this.qclabRepository.save(qclab);
  }
}
