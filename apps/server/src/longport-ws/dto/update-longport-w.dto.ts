import { PartialType } from '@nestjs/mapped-types';
import { CreateLongportWDto } from './create-longport-w.dto';

export class UpdateLongportWDto extends PartialType(CreateLongportWDto) {
  id: number;
}
