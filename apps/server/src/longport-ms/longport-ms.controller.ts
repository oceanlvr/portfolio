import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LongportMsService } from './longport-ms.service';
import { CreateLongportMDto } from './dto/create-longport-m.dto';
import { UpdateLongportMDto } from './dto/update-longport-m.dto';

@Controller()
export class LongportMsController {
  constructor(private readonly longportMsService: LongportMsService) {}

  @MessagePattern('createLongportM')
  create(@Payload() createLongportMDto: CreateLongportMDto) {
    return this.longportMsService.create(createLongportMDto);
  }

  @MessagePattern('findAllLongportMs')
  findAll() {
    return this.longportMsService.findAll();
  }

  @MessagePattern('findOneLongportM')
  findOne(@Payload() id: number) {
    return this.longportMsService.findOne(id);
  }

  @MessagePattern('updateLongportM')
  update(@Payload() updateLongportMDto: UpdateLongportMDto) {
    return this.longportMsService.update(
      updateLongportMDto.id,
      updateLongportMDto,
    );
  }

  @MessagePattern('removeLongportM')
  remove(@Payload() id: number) {
    return this.longportMsService.remove(id);
  }
}
