import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HolderService } from './holder.service';
import { CreateHolderDto } from './dto/create-holder.dto';
import { UpdateHolderDto } from './dto/update-holder.dto';

@Controller('holder')
export class HolderController {
  constructor(private readonly holderService: HolderService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createHolderDto: CreateHolderDto) {
    return this.holderService.create(createHolderDto);
  }

  @Get()
  findAll() {
    return this.holderService.findAll();
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateHolderDto: UpdateHolderDto) {
    return this.holderService.update(+id, updateHolderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.holderService.remove(+id);
  }
}
