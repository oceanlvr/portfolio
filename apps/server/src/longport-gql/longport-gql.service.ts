import { Injectable } from '@nestjs/common';
import { CreateLongportGqlInput } from './dto/create-longport-gql.input';
import { UpdateLongportGqlInput } from './dto/update-longport-gql.input';

@Injectable()
export class LongportGqlService {
  create(createLongportGqlInput: CreateLongportGqlInput) {
    return 'This action adds a new longportGql';
  }

  findAll() {
    return `This action returns all longportGql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} longportGql`;
  }

  update(id: number, updateLongportGqlInput: UpdateLongportGqlInput) {
    return `This action updates a #${id} longportGql`;
  }

  remove(id: number) {
    return `This action removes a #${id} longportGql`;
  }
}
