import { PartialType } from '@nestjs/mapped-types';
import { CreateLongportDto } from './create-longport.dto';

export class UpdateLongportDto extends PartialType(CreateLongportDto) {}
