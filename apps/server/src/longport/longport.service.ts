import { Injectable } from '@nestjs/common';
import { CreateLongportDto } from './dto/create-longport.dto';
import { UpdateLongportDto } from './dto/update-longport.dto';

@Injectable()
export class LongportService {
  create(createLongportDto: CreateLongportDto) {
    return 'This action adds a new longport';
  }

  findAll() {
    return `This action returns all longport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} longport`;
  }

  update(id: number, updateLongportDto: UpdateLongportDto) {
    return `This action updates a #${id} longport`;
  }

  remove(id: number) {
    return `This action removes a #${id} longport`;
  }
}
