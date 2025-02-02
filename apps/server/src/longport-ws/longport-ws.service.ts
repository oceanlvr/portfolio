import { Injectable } from '@nestjs/common';
import { CreateLongportWDto } from './dto/create-longport-w.dto';
import { UpdateLongportWDto } from './dto/update-longport-w.dto';

@Injectable()
export class LongportWsService {
  create(createLongportWDto: CreateLongportWDto) {
    return 'This action adds a new longportW';
  }

  findAll() {
    return `This action returns all longportWs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} longportW`;
  }

  update(id: number, updateLongportWDto: UpdateLongportWDto) {
    return `This action updates a #${id} longportW`;
  }

  remove(id: number) {
    return `This action removes a #${id} longportW`;
  }
}
