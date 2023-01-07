import { Injectable } from '@nestjs/common';
import { CreateHolderDto } from './dto/create-holder.dto';
import { UpdateHolderDto } from './dto/update-holder.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HolderService {
  constructor(private prisma: PrismaService) {}

  create(createHolderDto: CreateHolderDto) {
    return this.prisma.holder.create({ data: createHolderDto });
  }

  findAll() {
    return this.prisma.holder.findMany();
  }

  update(id: number, updateHolderDto: UpdateHolderDto) {
    return this.prisma.holder.update({
      where: { id },
      data: updateHolderDto,
    });
  }

  remove(id: number) {
    return this.prisma.holder.delete({
      where: { id },
    });
  }
}
