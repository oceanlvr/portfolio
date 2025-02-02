import { PartialType } from '@nestjs/mapped-types';
import { CreateLongportMDto } from './create-longport-m.dto';

export class UpdateLongportMDto extends PartialType(CreateLongportMDto) {
  id: number;
}
