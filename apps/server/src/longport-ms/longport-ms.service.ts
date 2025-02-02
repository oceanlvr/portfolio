import { Injectable } from '@nestjs/common';
import { CreateLongportMDto } from './dto/create-longport-m.dto';
import { UpdateLongportMDto } from './dto/update-longport-m.dto';

@Injectable()
export class LongportMsService {
  create(createLongportMDto: CreateLongportMDto) {
    return 'This action adds a new longportM';
  }

  findAll() {
    return `This action returns all longportMs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} longportM`;
  }

  update(id: number, updateLongportMDto: UpdateLongportMDto) {
    return `This action updates a #${id} longportM`;
  }

  remove(id: number) {
    return `This action removes a #${id} longportM`;
  }
}
