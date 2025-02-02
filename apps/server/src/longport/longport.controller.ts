import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LongportService } from './longport.service';
import { CreateLongportDto } from './dto/create-longport.dto';
import { UpdateLongportDto } from './dto/update-longport.dto';

@Controller('longport')
export class LongportController {
  constructor(private readonly longportService: LongportService) {}

  @Post()
  create(@Body() createLongportDto: CreateLongportDto) {
    return this.longportService.create(createLongportDto);
  }

  @Get()
  findAll() {
    return this.longportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.longportService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLongportDto: UpdateLongportDto,
  ) {
    return this.longportService.update(+id, updateLongportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.longportService.remove(+id);
  }
}
