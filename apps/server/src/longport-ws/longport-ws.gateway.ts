import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { LongportWsService } from './longport-ws.service';
import { CreateLongportWDto } from './dto/create-longport-w.dto';
import { UpdateLongportWDto } from './dto/update-longport-w.dto';

@WebSocketGateway()
export class LongportWsGateway {
  constructor(private readonly longportWsService: LongportWsService) {}

  @SubscribeMessage('createLongportW')
  create(@MessageBody() createLongportWDto: CreateLongportWDto) {
    return this.longportWsService.create(createLongportWDto);
  }

  @SubscribeMessage('findAllLongportWs')
  findAll() {
    return this.longportWsService.findAll();
  }

  @SubscribeMessage('findOneLongportW')
  findOne(@MessageBody() id: number) {
    return this.longportWsService.findOne(id);
  }

  @SubscribeMessage('updateLongportW')
  update(@MessageBody() updateLongportWDto: UpdateLongportWDto) {
    return this.longportWsService.update(
      updateLongportWDto.id,
      updateLongportWDto,
    );
  }

  @SubscribeMessage('removeLongportW')
  remove(@MessageBody() id: number) {
    return this.longportWsService.remove(id);
  }
}
