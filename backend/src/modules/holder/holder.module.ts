import { Module } from '@nestjs/common';
import { HolderService } from './holder.service';
import { HolderController } from './holder.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [HolderController],
  providers: [HolderService, PrismaService],
  imports: [],
})
export class HolderModule {}
